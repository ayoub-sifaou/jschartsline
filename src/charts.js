class ChartsJs {
    /**
     * Construct ChartsJs.
     * Type Line
     * bootstrap col default and minimal col = 3
     * height chart default = 350
     * @param  {Object} $element
     * @param  {Object} options
     */
    constructor($element, options = {}) {
        const my = this
        my.options = options
        my.$element = $element
        my._init()
    };

    _init() {
        const my = this;

        my._initialize();

        if (my.options.charts.line.maxLines > my.options.data.length) {
            my._initializeLineDefault();
        }

        if (my.options.legend.show) {
            my._legend();
            my._styleLegend();
        }

        my._animateCharts();
    }

    _initialize() {
        const my = this;
        let html = '',
            style = '',
            maxData = Math.max(...my.options.data),
            color = '',
            colorGradient = '',
            heightGradient = 0,
            heightLineCharts = 0,
            defaultHeightChart = 350;


        $('#styleStyle-' + my.options.style.element).remove();

        if (my.options.charts.height) {
            my.$element.css('height', my.options.charts.height + 'px')
        } else {
            my.$element.css('height', defaultHeightChart + 'px')
        }

        for (let i = 0; i < my.options.data.length; i++) {

            heightLineCharts = (my.options.data[i] * 100) / maxData + '%';
            color = color = my.options.colors[i];

            html += my._chartsJsHTML(i, heightLineCharts, color, my.options.data[i])
        }

        my.$element.prepend('<div class="listChartJsStyle">' + html + '</div>');

        for (let i = 0; i < my.options.data.length; i++) {

            colorGradient = my.options.colors[i];
            heightGradient = ((my.options.data[i] * 100) / maxData) + 6;

            style += my._styleLegendHTML(i, heightGradient, colorGradient);
        }

        $('.listChartJsStyle').css('height', 'calc(100% - 12%');

        $('head').append('<style type="text/css" id="styleStyle-' + my.options.style.element + '">' + style + '</style>')

    }

    _legend() {
        const my = this;
        let htmlLegend = '',
            col = 3;

        if (my.options.legend.bootstrap.row.col <= 2) {
            col = col;
        } else {
            if (my.options.legend.bootstrap.row.col) {
                col = my.options.legend.bootstrap.row.col;
            }
        }


        $(my.options.legend.element).empty();

        for (let i = 0; i < my.options.data.length; i++) {

            htmlLegend += ' <div class="d-flex align-items-center">\n' +
                '               <span class="w-legendIcon mr-2" style="background-color:' + my.options.colors[i] + '"></span>\n' +
                '               <span style="font-size:' + my.options.legend.font.size + 'px; font-family:' + my.options.legend.font.family + '">' + my.options.labels[i] + '</span>\n' +
                '     </div>';
            let j = i + 1;

            if (j % my.options.legend.numberItemInContainer === 0) {
                htmlLegend += '</div><div class="col-md-' + col + ' mb-3 px-0">'
            }
        }

        $(my.options.legend.element).prepend('<div class="row mx-0"><div class="col-md-' + col + ' mb-3 px-0">' + htmlLegend + '</div></div>');
    }

    _styleLegend() {
        const my = this;
        $(my.options.legend.element).find('.w-legendIcon').each(function (index) {
            let legendIcon = $(this);

            if (my.options.legend.iconStyle.width) {
                legendIcon.css('width', my.options.legend.iconStyle.width);
                legendIcon.css('height', my.options.legend.iconStyle.width);
            }

            if (my.options.legend.iconStyle.height) {
                legendIcon.css('width', my.options.legend.iconStyle.height);
                legendIcon.css('height', my.options.legend.iconStyle.height);
            }

            if (my.options.legend.iconStyle.height && my.options.legend.iconStyle.width) {
                legendIcon.css('width', my.options.legend.iconStyle.width);
                legendIcon.css('height', my.options.legend.iconStyle.height);
            }

            if (my.options.legend.iconStyle.borderRadius) {
                legendIcon.css('border-radius', my.options.legend.iconStyle.borderRadius + 'px');
            }

        })
    }

    _initializeLineDefault() {
        const my = this;
        let html = '',
            style = '',
            color = '',
            colorGradient = '',
            heightGradient = 0,
            heightLineCharts = 0,
            maxLines = my.options.charts.line.maxLines;

        let linesDefault = maxLines - my.options.data.length;

        for (let i = 0; i < linesDefault; i++) {
            color = my.options.charts.color.defaultColor;
            heightLineCharts = my.options.charts.line.width + 'px';

            let elementChartDefault = my.options.data.length + i;

            html += my._chartsJsHTML(elementChartDefault, heightLineCharts, color);
        }

        $('.listChartJsStyle').append(html)

        for (let i = 0; i < linesDefault; i++) {
            colorGradient = my.options.charts.color.defaultColor;
            heightGradient = 100 + 6;
            let elementChartDefault = my.options.data.length + i;

            style += my._styleLegendHTML(elementChartDefault, heightGradient, colorGradient);

        }

        $('#styleStyle-' + my.options.style.element + '').append(style)
    }

    _hexToRGB(hex, alpha) {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (alpha || alpha === 0) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    _styleLegendHTML(elementChartDefault, heightGradient, colorGradient) {
        const my = this;
        let style = '',
            content = '""';

        if (!my.options.charts.fill.show) {
            content = 'none';
        }

        style = '.chartsJsItems-' + my.options.style.element + '-' + elementChartDefault + ':after {' +
            'content: ' + content + ';' +
            'height:' + heightGradient + '%;';

        if (my.options.charts.fill.dropShadow.show) {
            style += 'filter: drop-shadow(' + my.options.charts.fill.dropShadow.top + 'px ' + my.options.charts.fill.dropShadow.left + 'px ' + my.options.charts.fill.dropShadow.blur + 'px ' + my._hexToRGB(my.options.charts.fill.dropShadow.color, my.options.charts.fill.dropShadow.opacity) + ');';
        }

        style += 'background: linear-gradient(to top, ' + my._hexToRGB(colorGradient, my.options.charts.fill.gradient.opacity.to) + ' 0%, ' + my._hexToRGB(colorGradient, my.options.charts.fill.gradient.opacity.for) + ' 100%) !important;' +
            '}';

        return style;
    }

    _chartsJsHTML(elementChartDefault, heightLineCharts, color, value = 0) {
        const my = this;
        let html = '',
            afterWidth = 0,
            marginRightPositionAbsolute = my.options.charts.line.width / 2;

        if (my.options.charts.line.afterWidth < my.options.charts.line.width) {
            afterWidth = my.options.charts.line.width + 20;
        } else {
            afterWidth = my.options.charts.line.afterWidth;
        }

        html = '<div data-height="' + heightLineCharts + '"  class="chartsJsItems chartsJsItems-' + my.options.style.element + '-' + elementChartDefault + '" style="width:' + afterWidth + 'px;">\n' +
            '       <div class="item" style="width:' + my.options.charts.line.width + 'px; margin-right: -' + marginRightPositionAbsolute + 'px">' +
            '          <div class="mini-item" style="background: ' + color + '; height: ' + heightLineCharts + ';border-radius: ' + my.options.charts.borderRadius + 'px;';

        if (my.options.charts.line.dropShadow.show) {
            html += 'filter: drop-shadow(' + my.options.charts.line.dropShadow.top + 'px ' + my.options.charts.line.dropShadow.left + 'px ' + my.options.charts.line.dropShadow.blur + 'px ' + my._hexToRGB(color, my.options.charts.line.dropShadow.opacity) + ');';
        }
        html += '"></div>' +
            '       </div>\n';
        if (my.options.charts.label.show) {
            html += '<div class="label" style="width: ' + afterWidth + 'px"><span style="color: ' + color + '; font-family: ' + my.options.charts.label.font.family + '; font-size: ' + my.options.charts.label.font.size + 'px;">' + value + '</span></div>';
        }
        html += '   </div>';

        return html;
    }

    _animateCharts() {
        const my = this;

        my.$element.find('.chartsJsItems').each(function (index) {
            let element = $(this),
                dataHeight = element.data('height');



            // element.next().next().animate({
            //     height: 'toggle',
            //     lineHeight: 'toggle'
            // });

            // element.show();
        })
    }

}

$.fn.chartsJs = function (options) {
    return $.each($(this), function (i, obj) {
        new ChartsJs($(this), options)
    })
}
