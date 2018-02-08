/**
 * Created by arinovich.anatoli on 08.02.2018.
 */
import React, { Component } from 'react';
import RestClient from 'react-native-rest-client'; // 0.1.1

export default class RestApi extends RestClient {
    constructor () {
        // Initialize with your base URL
        super('https://rest-2211.herokuapp.com');
    }
    // Now you can write your own methods easily
    getNote() {
        // Returns a Promise with the response.
        return this.GET('https://rest-2211.herokuapp.com/note').then(response => response);
    }
    removeNote() {
        // If the request is successful, you can return the expected object
        // instead of the whole response.
        return this.GET('/remove')
            .then(response => response);
    }
}