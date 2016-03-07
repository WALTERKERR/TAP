# T.A.P. -- the Thermo-Aggregation Project

The main and long-term goal of this project is to use sensor data from Arduinos modules to alert public health officials about communities that may be at risk for flu and infectious disease outbreaks.  The other goal of this project is to provide documentation to other Arduino enthusiasts on how to enable their Arduinos to connect to WiFi and connect to an API, since there is a lack of documentation on this topic.  

Using infrared non-contact thermometers in public places, we passively collect human temperatures and feed that data realtime to our servers. Our systems immediately identify communities with abnormal temperature readings to notify authorities about potential public health concerns.

![Thermo-Aggregation Project Landing Page](/thermo-aggregation-project-landing-page.png?raw=true "Thermo-Aggregation Project Landing Page")

## Details
Data is collected from infrared thermometer sensors built on Arduino Uno boards. One of the benefits of using an infrared thermometer is that it can collect temperature data quickly and without actually making contact with a person. This means that an Arduino device with an infrared thermometer sensor could be affixed to a building entrance and collect and transmit temperature data for every person that walked by it, providing hundreds of data points a day.
This application will work best when we have devices all over the country collecting and publishing information. Stay tuned for more information regarding how to build or acquire your own Arduino device and post data to our site! 

In order to contribute to this open source project, people can:
- upload data through their own Arduinos (instructions will be provided for this)
- or if they have no access to an Arduino and its sensor modules, people can also upload data with CSV files.

![Thermo-Aggregation Project Main View](/thermo-aggregation-project-main-view.png?raw=true "Thermo-Aggregation Project Main View")

### How To Contribute Data
#### For People Who Want To Upload CSV Files:
The files must be formatted as .csv.  All temperatures are in Fahrenheit.
![Thermo-Aggregation Project How To Upload CSV Files](/thermo-aggregation-project-upload-csv.png?raw=true "Thermo-Aggregation Project How To Upload CSV Files")
1. Once on the main map view, click on "Upload Data".
2. The data must be arranged in this sequence:
    ```
    [infrared-sensed-temperature],[humidity],[mq_2 (flammable gasses)]
    ```
    An example would be:
    ```
    85.0,0.8,75.0
    86.0,0.7,76.0
    87.0,0.9,78.0
    85.0,0.8,75.0
    86.0,0.7,76.0
    ```

#### For People Who Want To Upload Data Through Their Arduinos
##### Hardware:
The model of Arduino that we used was the Uno.  
These are the sensor modules that we have attached so far:
- **Adafruit_MLX90614** = the infrared & ambient temperature sensor
- **DHT** = the humidity sensor
- **MQ-2 Gas Sensor** = the flammable gasses sensor

You may use newer or better sensors than what was used here.



## Contributor List (In Alphabetical Order)
- Bernice Anne W. Chua
  - [GitHub](https://github.com/BerniceChua)
  - [LinkedIn](https://linkedin.com/in/bernicechua415)
  - [Twitter](https://twitter.com/ChuaBernice)
- Luis De Castro
  - [GitHub](https://github.com/HolixSF)
  - [LinkedIn](https://www.linkedin.com/in/holixsf)
- Michael Du
  - [GitHub](https://github.com/supermikol)
  - [LinkedIn](https://www.linkedin.com/in/michael-du-4927555)
- Jonathan Huang
  - [GitHub](https://github.com/jonwhuang)
  - [LinkedIn](https://www.linkedin.com/in/jonathan-huang-84659971)
- Walter Kerr (The Person Who Started This Idea)
  - [GitHub](https://github.com/WALTERKERR)
  - [LinkedIn](https://www.linkedin.com/in/walter-kerr-2163336a)


License
----

MIT
