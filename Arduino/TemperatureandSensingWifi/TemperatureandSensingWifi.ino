
/*
  Web client

 This sketch connects to a website (http://www.google.com)
 using a WiFi shield.

 This example is written for a network using WPA encryption. For
 WEP or WPA, change the Wifi.begin() call accordingly.

 This example is written for a network using WPA encryption. For
 WEP or WPA, change the Wifi.begin() call accordingly.

 Circuit:
 * WiFi shield attached

 created 13 July 2010
 by dlf (Metodo2 srl)
 modified 31 May 2012
 by Tom Igoe
 */


#include <SPI.h>
#include <WiFi.h>
#include "DHT.h"
#include <Wire.h>
#include <Adafruit_MLX90614.h>
#define mq2Pin 1  // MQ-2 module attach to A1 on SUNFOUNDER MEGA2560
Adafruit_MLX90614 mlx = Adafruit_MLX90614();

#define DHTPIN 2     // what digital pin we're connected to
#define DHTTYPE DHT22   // DHT 22  (AM2302), AM2321

char ssid[] = "DevBootcamp"; //  your network SSID (name)
char pass[] = "igeekallweek";    // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;            // your network key Index number (needed only for WEP)

int status = WL_IDLE_STATUS;
// if you don't want to use DNS (and reduce your sketch size)
// use the numeric IP instead of the name for the server:
//IPAddress server(74,125,232,128);  // numeric IP for Google (no DNS)
char server[] = "thermo-aggregation-project.herokuapp.com";    // name address for Google (using DNS)

// Initialize the Ethernet client library
// with the IP address and port of the server
// that you want to connect to (port 80 is default for HTTP):
WiFiClient client;
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  //Initialize serial and wait for port to open:
  Serial.begin(9600);
  dht.begin();
  mlx.begin();

  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // check for the presence of the shield:
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present");
    // don't continue:
    while (true);
  }

  String fv = WiFi.firmwareVersion();
  if (fv != "1.1.0") {
    Serial.println("Please upgrade the firmware");
  }

  // attempt to connect to Wifi network:
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);

    // wait 4 seconds for connection:
    delay(4000);
  }
  Serial.println("Connected to wifi");
  printWifiStatus();

  Serial.println("\nStarting connection to server...");
  // if you get a connection, report back via serial:
  if (client.connect(server, 80)) {
    Serial.println("connected to server");
    // Make a HTTP request:
    client.println("POST /unicorn HTTP/1.1");
    client.println("Host: thermo-aggregation-project.herokuapp.com");
    client.println("Content-Type: application/x-www-form-urlencoded");
    client.println("Content-Length: 16");
    client.println();
    client.println("message=Initiate");
    client.println();
 }
}


void loop() {

  while (client.available()) {
    char c = client.read();
    Serial.write(c);
    delay(2500);
    client.stop();
    makeCallonServer();
  }

  // if the server's disconnected, stop the client:
  if (!client.connected()) {
    Serial.println();
    Serial.println("disconnecting from server.");
    client.stop();
    Serial.println("Reconnecting to server.");
    connectToServer();

    // do nothing forevermore:
//    while (true);
  }
}


void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}

void makeCallonServer(){
    client.connect(server, 80);// Make a HTTP request:
    client.println("POST /test HTTP/1.1");
    client.println("Host: lit-reaches-37868.herokuapp.com");
    client.println("Content-Type: application/x-www-form-urlencoded");
    client.println("Content-Length: 130");
    client.println();
    client.println("ObjectTemp:"); client.println(mlx.readObjectTempF());
    client.println("MQ-2Value:"); client.println(analogRead(mq2Pin));
    client.println("AmbientTemp:"); client.println(mlx.readAmbientTempF());
    client.println("Humidity:"); client.println(dht.readHumidity());
    client.println("City:"); client.println("San Diego");
    client.println("State:"); client.println("California"); client.println("ZXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    client.println("Connection: close");
    client.println();

}

void connectToServer(){
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);

    // wait 10 seconds for connection:
    delay(10000);
  }
  Serial.println("Connected to wifi");
  printWifiStatus();

  Serial.println("\nStarting connection to server...");
  // if you get a connection, report back via serial:
  if (client.connect(server, 80)) {
    Serial.println("connected to server");
    // Make a HTTP request:
    client.println("POST /test HTTP/1.1");
    client.println("Host: lit-reaches-37868.herokuapp.com");
    client.println("Content-Type: application/x-www-form-urlencoded");
    client.println("Content-Length: 16");
    client.println();
    client.println("message=Initiate");
    client.println();
 }
}


