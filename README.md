Template chartsjs type line.
Bootstrap 4 compatible. Because use css classes in bootstrap 4.

### Installation In Local

1. Clone the repo
   ```sh
   git clone https://gitlab.com/ayoub-sifaou/jschartsline.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

3. Run server package
   ```sh
   npx webpack serve --mode=development
   ```  

### Installation In Project 

1. Install NPM packages
   ```sh
   npm i js-charts-line
   ```

2. Import js packages
   ```sh
   import ChartsJs from 'js-charts-line/src/charts'
   ```

3. Import scss or css packages
   ```sh
   @import "~js-charts-line/dist/chartsJs.css";
   ---OR--
   @import "~js-charts-line/src/scss/chartsJs";
   ```

3. Import style jsChartsLine with bootstrap 4
   ```sh
   @import "~js-charts-line/src/scss/styles";
   ```

4. Example 
   ```sh
   $(elements).chartsJs({
        data: [31, 40, 20, 18, 48, 14, 35, 20, 50],
        colors: ['#6480AD', '#FF5000', '#FACA68', '#77A4AA', '#2F3F58', '#6480AD', '#FF5000', '#FACA68', '#6480AD'],
        labels: ['legend 1', 'legend 2', 'legend 3', 'legend 4','legend 5', 'legend 6', 'legend 7', 'legend 8','legend 9'],
        legend: {
            show: true,
            element: '.legendApexCharts1',
            numberItemInContainer: 1,
            font: {
                size: 14,
                family: "'Roboto-Regular' , sans-serif"
            },
            bootstrap: {
                row: {
                    col: 1,
                }
            },
            iconStyle: {
                width: 40,
                height: 12,
                borderRadius: 5,
            }
        },
        charts: {
            height: 350,
            borderRadius: 0,
            label: {
                show: true,
                font: {
                    size: 20,
                    family: "'Roboto-Black' , sans-serif"
                },
            },
            color: {
                defaultColor: '#D8D8D8',
            },
            fill: {
                show: true,
                dropShadow: {
                    show: true,
                    top: 0,
                    left: 6,
                    blur: 30,
                    color: '#000000',
                    opacity: 0.08
                },
                gradient: {
                    opacity: {
                        to: 0.23,
                        for: 0.01
                    }
                }
            },
            line: {
                afterWidth: {
                    width: 55,
                    borderRadius: {
                        show: true,
                    }
                },
                width: 35,
                dropShadow: {
                    show: true,
                    top: 0,
                    left: 10,
                    blur: 30,
                    opacity: 0.2
                },
                maxLines: 12,
            }
        },
        style: {
            element: 'charts-one'
        }
    });

   


Screenshot

![image](https://user-images.githubusercontent.com/71824216/136416460-8b521bbe-0bc3-4b7a-ab05-d36c185f03d7.png)

![sc2](https://user-images.githubusercontent.com/71824216/140049386-733a7d66-3775-4fb3-b217-d4d3c2a75d35.PNG)

![image](https://user-images.githubusercontent.com/71824216/140049498-63ca5bb0-0a83-4b84-bca3-babfec8161dc.png)




Browsers support
Firefox	
Chrome
Safari
Edge
IE11
