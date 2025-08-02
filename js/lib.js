/*
Cory Witt
lib.js
INFO 1579
Shaw
08/01/2025 */

// lib.js contains the WeatherForecast class and getters/setters for the WeatherForecast class.
 
"use strict";
class WeatherForecast {
    constructor(d, t, tM, tX) {                     //Constructor for the WeatherForecast class
        console.log(d, t, tM, tX);
        this.date = d;
        this.temp = t;
        this.tempMin = tM;
        this.tempMax = tX;
    }

    getDate() {
        return new Date(this.date);
    }

    getTemp() {
        return this.temp;
    }

    getMaxTemp() {
        return this.tempMax;
    }

    getMinTemp() {
        return this.tempMin;
    }

    getDayString() {                                               //getDayString() builds and returns a string containing the weekday, month, and date
        let d = new Date(this.date);
        let day = d.getDay();
        let date = d.getDate();
        let mon = d.getMonth()  + 1;
        let dayName = '';
        switch(day) {
            case 0:
                dayName = 'Sun';
            break;
            case 1:
                dayName = 'Mon';
                break;
            case 2:
                dayName = 'Tue';
                break;
            case 3:
                dayName = 'Wed';
                break;
            case 4:
                dayName = 'Thu';
                break;
            case 5:
                dayName = 'Fri';
                break;
            case 6:
                dayName = 'Sat';
                break;
        }

        return `${dayName}, ${mon}/${date}`;                        //Returns a string containing weekday, month, and date.
    }
}