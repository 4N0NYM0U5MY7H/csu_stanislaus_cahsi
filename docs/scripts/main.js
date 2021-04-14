/*!
  * main.js v0.0.1 (https://hopper.csustan.edu/~cahsi/)
  * Copyright 2021 The Stan-State CAHSI Club (https://github.com/parasiticfrisk/csustanCAHSI/graphs/contributors)
  * Licensed under MIT (https://github.com/parasiticfrisk/csustanCAHSI/blob/master/LICENSE)
  */


/*  Add new calendar events to the top of this list
 *  Use the following format:
 *
 *  id: "0000",        // string; must be unique
 *  name: "",          // string;
 *  description: "",   // string;
 *  badge: "",         // string; optional
 *  date: "",          // string;
 *  type: "",          // string; current options: event, birthday, holiday
 *  everyYear:         // boolean; optional
 */
var eventList = [
    {
        id: "0008",
        name: "",
        description: "Join us for a fireside conversation to learn about our speaker's career paths, personal stories and thoughts on the Cybersecurity industry. We will have a moderated session followed by attendee Q&amp;A.",
        date: "Oct 14, 2020",
        type: "event",
    }, {
        id: "0007",
        name: "Latinx in Cybersecurity",
        description: "Join us for a fireside conversation to learn about our speaker's career paths, personal stories and thoughts on the Cybersecurity industry. We will have a moderated session followed by attendee Q&amp;A.",
        date: "Oct 14, 2020",
        type: "event",
    }, {
        id: "0006",
        name: "#LHM Summit",
        description: "Techqueria's #LHM Summit is a free virtual conference during Latinx Heritage Month (LHM) created to empower Latinx professionals in tech, connect them with companies who are committed to inclusion and to celebrate the thriving Latinx in tech community.",
        badge: "Techqueria",
        date: "Oct 10, 2020",
        type: "event",
    }, {
        id: "0005",
        name: "Intro to Advanced ML",
        description: "Presented by Women Who Code. This series is aimed at teaching the core concepts of machine learning by looking into the 'black box' and understanding the math behind an algorithm.",
        badge: "WWCode",
        date: "Oct 10, 2020",
        type: "event",
    }, {
        id: "0004",
        name: "Intro to Advanced ML",
        description: "Presented by Women Who Code. This series is aimed at teaching the core concepts of machine learning by looking into the 'black box' and understanding the math behind an algorithm.",
        badge: "WWCode",
        date: "Oct 3, 2020",
        type: "event",
    }, {
        id: "0003",
        name: "Intro to Advanced ML",
        description: "Presented by Women Who Code. This series is aimed at teaching the core concepts of machine learning by looking into the 'black box' and understanding the math behind an algorithm.",
        badge: "WWCode",
        date: "Sep 26, 2020",
        type: "event",
    }, {
        id: "0001",
        name: "Fundamentals for Beginners",
        description: "@ 7 p.m. Whether you are a beginner or expert, there are some CS fundamentals you should know. Join us as we review CS fundamentals such as arrays, loops, functions, and much more!",
        badge: "CAHSI Stan",
        date: "Sep 25, 2020",
        type: "event"
    }, {
        id: "0000",
        name: "Hack Your Dream Job",
        description: "Presented by Dreamers in Tech. Applying for a job, confidence building, owning your skills, telling your undocu story, and more.",
        badge: "Dreamers in Tech",
        date: "Sep 22, 2020",
        type: "event"
    }];

$(document).ready(function () {
    $("#testCalendar").evoCalendar({
        theme: "Midnight Blue",
        format: "MM, dd, yyyy",
        titleFormat: "MM",
        eventHeaderFormat: "MM d, yyyy",
        firstDayOfWeek: 0,
        todayHighlight: true,
        sidebarDisplayDefault: false,
        sidebarToggler: true,
        eventDisplayDefault: true,
        eventListToggler: true,
    });
    $("#testCalendar").evoCalendar("addCalendarEvent", eventList);
});