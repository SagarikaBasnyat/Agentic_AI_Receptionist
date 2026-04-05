# Agentic AI Receptionist 

A conversational AI backend built using Dialogflow ES that powers an automated booking assistant for a pet service business.

---

## Overview

This project focuses on designing the conversational intelligence layer of a chatbot system. It handles user intent detection, context management, and structured data extraction for booking workflows.

The system simulates a real-world receptionist by managing multi-step conversations, resolving ambiguity between user intents, and capturing booking details. While no front-end chat interface is implemented, this solution represents the core logic that can be integrated into platforms such as web chat, messaging apps, or voice assistants.

---

## Features

* FAQ handling for grooming, boarding, and service-related queries
* Context-driven multi-step booking flow
* Intelligent intent routing between FAQ and booking interactions
* Entity extraction for:

  * service type
  * date
  * time
  * pet name
  * phone number
* Webhook integration using Google Apps Script
* Automatic booking data storage in Google Sheets
* Conflict resolution for overlapping inputs (e.g., "grooming" as FAQ vs booking)

---

## Tech Stack

* Dialogflow ES
* Google Apps Script (Webhook)
* Google Sheets

---

## How It Works

1. A user interacts with the conversational agent.
2. The system identifies whether the user intent is:

   * informational (FAQ), or
   * transactional (booking).
3. If the user initiates a booking:

   * the system collects required details step-by-step
4. Once all required data is captured:

   * the webhook sends the data to Google Sheets
5. The system confirms the booking request

---

## Architecture

User → Dialogflow ES → Intent Matching + Context Handling → Webhook (Apps Script) → Google Sheets

---

## Dialogflow Components

The Dialogflow export in this repository includes:

* Intents (conversation logic and responses)
* Entities (structured data extraction)
* Agent configuration files

These define how the system interprets user input and manages conversation flow.

---

## Google Sheets Integration

The booking workflow is integrated with Google Sheets using a Google Apps Script webhook.

When a booking is completed, the system records:

* Timestamp
* Service Type
* Date
* Time
* Pet Name
* Phone Number

This simulates a real-world booking management system.

---

## Key Design Challenge

A major challenge in this project was handling overlapping user inputs such as **"grooming"** and **"boarding"**, which could represent both:

* a request for information (FAQ), or
* a booking selection

This was solved using:

* context-based intent routing
* separation of conversational states
* controlled intent matching within booking flows

---

## Repository Structure

```
.
├── intents/
├── entities/
├── agent.json
├── package.json
├── apps_script.js
└── README.md
```

---

## Learning Outcomes

This project demonstrates:

* Conversational AI system design
* Intent classification and routing
* Context management in Dialogflow
* Webhook integration with external systems
* Automated data capture pipelines

---

## Future Improvements

* Add front-end chat interface (web or mobile)
* Integrate with messaging platforms (e.g., WhatsApp, SMS)
* Enhance natural language understanding for edge cases
* Add real-time booking confirmation notifications
* Improve data validation and formatting

---

## Author

Sagarika Basnyat
