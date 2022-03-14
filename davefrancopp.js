
define([
    'jquery',
    'mage/translate',
    'jquery/ui'
], function ($, $t) {
    'use strict';

    $.widget('mage.quantity', {
        options: {
            enabled: true,
            qtyfield: '.quantity'
        },
        _create: function () {
            if (this.options.enabled) {
                this._bindqty();
            }
        },
        _bindqty: function () {
            var self = this.element;
            var selectqtyfield = $(this.options.qtyfield);
            var qtyfields = self.find(selectqtyfield);

            $(qtyfields).each(function () {
                var qtyfield = jQuery(this),
                    input = qtyfield.find('input[type="number"]'),
                    btnUp = qtyfield.find('.quantity-up'),
                    btnDown = qtyfield.find('.quantity-down'),
                    min = input.attr('min'),
                    max = input.attr('max');

                btnUp.click(function () {
                    var oldValue = parseFloat(input.val());
                    if (oldValue >= max) {
                        var newVal = oldValue;
                    } else {
                        var newVal = oldValue + 1;
                    }
                    qtyfield.find("input").val(newVal);
                    qtyfield.find("input").trigger("change");
                });

                btnDown.click(function () {
                    var oldValue = parseFloat(input.val());
                    if (oldValue <= min) {
                        var newVal = oldValue;
                    } else {
                        var newVal = oldValue - 1;
                    }
                    qtyfield.find("input").val(newVal);
                    qtyfield.find("input").trigger("change");
                });
            });
        }
    });

    return $.mage.quantity;

});