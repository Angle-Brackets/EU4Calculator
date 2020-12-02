import '../styles/global.css'
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { Provider, Context } from '../contexts/countryContext'
import {useState} from 'react'

export default class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props;
      return (
        <div>
          <Head>
            
          </Head>
          <Provider>
            <Component {...pageProps} />
          </Provider>
        </div>
      )
    }
  }
  
