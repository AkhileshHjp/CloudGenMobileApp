"use strict";(self.webpackChunkNgMobileApp=self.webpackChunkNgMobileApp||[]).push([[912],{2912:(u,i,t)=>{t.r(i),t.d(i,{AppWeb:()=>o});var n=t(5861),s=t(2726);class o extends s.Uw{constructor(){super(),this.handleVisibilityChange=()=>{const e={isActive:!0!==document.hidden};this.notifyListeners("appStateChange",e),document.hidden?this.notifyListeners("pause",null):this.notifyListeners("resume",null)},document.addEventListener("visibilitychange",this.handleVisibilityChange,!1)}exitApp(){throw this.unimplemented("Not implemented on web.")}getInfo(){var e=this;return(0,n.Z)(function*(){throw e.unimplemented("Not implemented on web.")})()}getLaunchUrl(){return(0,n.Z)(function*(){return{url:""}})()}getState(){return(0,n.Z)(function*(){return{isActive:!0!==document.hidden}})()}minimizeApp(){var e=this;return(0,n.Z)(function*(){throw e.unimplemented("Not implemented on web.")})()}}}}]);