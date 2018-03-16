# Tone Analyzer - Portuguese (BR)

Application demo that detects emotions and language tone from written text in brazilian portuguese.
Watson Tone Analyzer and Watson Language Translator services were used.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This is a Node.js project. Before installing the project, download and install the following prerequisites.

* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

### Installing

```
# clone the repository locally
git clone https://github.com/jessham/tone-analyzer.git
# change the directory
cd tone-analyzer
```

### Configure .env file

Create a ```.env``` file in the root directory of your project.
You will need to update these credentials:
```
# TONE ANALYZER SERVICE
TA_URL=
TA_USERNAME=
TA_PASSWORD=

# LANGUAGE TRANSLATOR
LT_URL=
LT_USERNAME=
LT_PASSWORD=
```

### Run the application
```
# install any dependencies
npm install
# then start the app
npm start
```

## Try the demo

You can find the demo at [Tone Analyzer](https://tone-analyzer-pt.mybluemix.net/).