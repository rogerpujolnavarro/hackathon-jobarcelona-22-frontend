# 💻 Hackathon JOBarcelona'22 (Roger Pujol)

> [Nuwe.io](https://nuwe.io/challenge/jobarcelona-22-front-end) challange frontend. Library of components for a visualization of the different groups of gifts in horizontal scroll mode (for PC) and a list for the mobile and tablet version.


## Usage

Component with a title and a group of gifts containing the following information:

- Title
- Description
- Group tags

The component is responsive:

- Adopt a horizontal scrolling mode for PC
- Adopt list mode for Mobile and Tablet

Clicking on each group of gifts allows you to execute an action (for now undefined).

The example proposed for the challenge:
![Screenshot challange example](https://i.ibb.co/p1H2vpj/library.png)

## Components

### **Badge component**
> Badge component for tags or labeling. The customizables parameters are:
> - backgroundColor: string with color for background
> - color: string witho color for text
> - size: string with one of these options <code>sm</code>,<code>md</code> or <code>lg</code>
> - label: string for text content

### **Card component**
> Card component with a title, text and a list of tags. The customizables parameters are:
> - title: string
> - description: string
> - tags: list or array of tags to include in card (may include parameters of Badge component)
> - backgroundColor: string with color for background
> -	borderWidth: number between 0 and 3
> - color: string witho color for text
> - active: boolean
> -	onClick: function to be executed on click on Card component

### **GiftsList component**
> GiftsList component includes a general title and a list of Cards components. The customizables parameters are:
> - backgroundColor: string with color for background
> - color: string witho color for text
> - title: string
> - gifts: list or array of gifts to include in the list (may include parameters of Card components and Badge components)





## Installation

You should have installed at least node version 16.14 ([Node.js](https://nodejs.org/en/download/)) and git version 2.36 ([Git](https://git-scm.com/downloads/)).  

Clone the repository into your projects directory:
```
    git clone https://github.com/rogerpujolnavarro/hackathon-jobarcelona-22-frontend.git
```

Install the dependencies within the project directory:
```
    cd hackathon-jobarcelona-22-frontend
    npm i 
```

Run Storybook project to see all components:
```
    npm run storybook
```

Run an example webapp using components of Storybook in React:
```
    npm start
```

## License 
MIT License

Copyright (c) 2022 Roger Pujol Navarro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
