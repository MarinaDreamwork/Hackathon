import { Module } from "../core/module";
import { getRandomColor, random } from '../utils';

export class UniversitiesOfUKModule extends Module {
    constructor(type, text) {
      super(type, text)
      this.containerElement = document.createElement('div')
    }
    trigger() {
      
      this.containerElement ? this.containerElement.remove() : null

      try{
        const URL = 'http://universities.hipolabs.com/search?country=United+Kingdom';

        fetch(URL)
          .then(response => response.json())
          .then(data => {
            const currentDataOfUniversity = data[random(0, 172)]
            this.createHTMLForUniversitiesUK(currentDataOfUniversity.name, currentDataOfUniversity.web_pages[0])
        });
      } catch(error) {
        console.error(`Ошибка: ${error}`)
      }
      
      
    }
    createHTMLForUniversitiesUK(name, website) {
      this.containerElement.classList.add('container-universities-data', 'element-style')
      this.containerElement.style.width = '50%'
      this.containerElement.style.background = getRandomColor()
      this.containerElement.style.borderRadius = '15px'
      this.containerElement.style.margin = '0 auto'

      const dataElement = document.createElement('p')
      dataElement.classList.add('element-style')
      dataElement.style.textAlign = 'center'

      const nameElementTitle = document.createElement('span');
      const nameElement = document.createElement('span');
    
      nameElementTitle.classList.add('universities')
      nameElementTitle.innerText = 'University: '

      nameElement.classList.add('name')
      nameElement.innerText = name

      const siteElementTitle = document.createElement('span')
      const siteElement = document.createElement('a')

      siteElementTitle.classList.add('universities')
      siteElementTitle.innerText = ' Website: '

      siteElement.classList.add('web-site')
      siteElement.innerHTML = website
      siteElement.href = website

      dataElement.append(nameElementTitle, nameElement, siteElementTitle, siteElement)

      this.containerElement.append(dataElement);
      document.body.append(this.containerElement);
        return this.containerElement;
  }

  
}



