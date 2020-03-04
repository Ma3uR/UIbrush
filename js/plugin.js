(function ($) {
    $.fn.slideShow = function (options) {

        var Slider = function (element, options) {
            this.options = $.extend({
                pauseOnHover: true,
                showNavigation: true,
                swipeNavigation: true,
                timeOut: 3000
            }, options);
            this.$container = $(element);
            this.$slidesContainer = this.$container.find('.slides-belt');
            this.interval = null;

            if (this.options.showNavigation) {
                this.createNavigation();
            }

            this.automaticSlide();

            // Pause on hover and resume on mouse leave
            if (this.options.pauseOnHover) {
                this.$container.on({
                    'mouseenter.hover': function () {
                        clearInterval(this.interval)
                    }.bind(this),
                    'mouseleave.hover': this.automaticSlide.bind(this)
                });
            }

            // Create the navigation buttons
            // Change slide on swipe
            if (this.options.swipeNavigation) {
                this.$slidesContainer.hammer().on({
                    'swiperight': function () {
                        clearInterval(this.interval);

                        this.$slidesContainer.find('.slide:last')
                            .fadeIn('slow')
                            .insertBefore(this.$slidesContainer.find('.slide:first').fadeOut('slow'));
                    }.bind(this),
                    'swipeleft': function () {
                        clearInterval(this.interval);

                        this.$slidesContainer.find('.slide:first')
                            .fadeOut('slow')
                            .next('.slide')
                            .fadeIn('slow')
                            .end()
                            .appendTo(this.$slidesContainer);
                    }.bind(this)
                })
            }
        };

        Slider.prototype.createNavigation = function () {
            // The buttons themselves
            var leftArrow = $('<div class="leftBtn slideBtn hide">'),
                rightArrow = $('<div class="rightBtn slideBtn hide">'),
                // for the buttons
                nextPointer = $('<span class="pointer next"></span>'),
                prevPointer = $('<span class="pointer previous"></span>');

            prevPointer.appendTo(leftArrow);
            nextPointer.appendTo(rightArrow);

            leftArrow.appendTo(this.$container);
            rightArrow.appendTo(this.$container);

            this.$container.on({
                'mouseenter': function () {
                    $(this).find('.leftBtn, .rightBtn').removeClass('hide')
                },
                'mouseleave': function () {
                    $(this).find('.leftBtn, .rightBtn').addClass('hide')
                }
            });

            this.bindNavigationClicks();
        };

        Slider.prototype.bindNavigationClicks = function () {
            this.$container.find('.leftBtn').on('click', this.leftButtonClick.bind(this));
            this.$container.find('.rightBtn').on('click', this.rightButtonClick.bind(this));
        };

        Slider.prototype.unbindNavigationClicks = function () {
            this.$container.find('.leftBtn').off('click');
            this.$container.find('.rightBtn').off('click');
        };

        Slider.prototype.leftButtonClick = function () {
            this.unbindNavigationClicks();
            clearInterval(this.interval);

            this.$container.find('.slide:last')
                .fadeIn('slow', function () {
                    this.bindNavigationClicks();
                    this.automaticSlide();
                }.bind(this))
                .insertBefore(
                    this.$container.find('.slide:first').fadeOut('slow')
                );

            this.$container.off('mouseenter.hover mouseleave.hover');
        };

        // Slider.prototype.effectSlide = function () {};
        // Slider.prototype.effectFade = function () {};
        // Slider.prototype.effectInside = function () {};

        Slider.prototype.rightButtonClick = function () {
            this.unbindNavigationClicks();
            clearInterval(this.interval);

            this.$slidesContainer.find('.slide:first')
                .fadeOut('slow')
                .next('.slide')
                .fadeIn(`slow`, function () {
                    this.bindNavigationClicks();
                    this.automaticSlide();
                }.bind(this))
                .end()
                .appendTo(this.$slidesContainer);

            this.$container.off('mouseenter.hover mouseleave.hover');
        };

        Slider.prototype.automaticSlide = function () {
            this.$container.find('.slide:gt(0)').hide();

            this.interval = setInterval(function () {
                    this.$slidesContainer.find('.slide:first')
                        .fadeOut('slow')
                        .next('.slide')
                        .fadeIn('slow')
                        .end()
                        .appendTo(this.$slidesContainer);
                }.bind(this),
                this.options.timeOut
            );
        };

        $(this).each(function (index, element) {
            new Slider(element, options)
        });
    }
}(jQuery));
