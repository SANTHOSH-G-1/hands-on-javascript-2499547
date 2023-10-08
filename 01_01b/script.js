/**
 * Add date to output.
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 */

import data from "./data.js";

const getDate = (imgData) =>{
  const nicedate=
    date.toLocaleString("default",{
            year: "numeric",
            month: "long",
            day: "numeric",
           }); 
           return nicedate
}

const mainContent = document.querySelector(".main-content");

const Card = (data) => {
  const imgData = data[0];

  const date= new Date(imgData.created_at);

  const markup = `
    <figure class="image">
      
      <figcaption class="image__caption">
        <h3 class="image__title">${imgData.description}</h3>
        <div class="image__meta">
          <p>
            Photo by
            <span class="image__photog">${imgData.user.name}</span>.
          </p>
          <p>
           Uploaded on
           <time class="image__date" datetime="${imgData.created_at}">
           ${getDate(imgData)}
           </time>
          </p>
          <p>
            <a href="${imgData.links.self}" class="image__link">
              View it on Unsplash.
            </a>
          </p>
        </div>
      </figcaption>
    </figure>
  `;

  mainContent.innerHTML = markup;
};

Card(data);
