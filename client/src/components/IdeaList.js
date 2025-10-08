import IdeasApi from "../sevices/ideasApi";

class IdeaList {
  constructor() {
    this._ideaListEl = document.querySelector("#idea-list");
    this._ideas = [];
    this.getIdeas();
    this._validTags = new Set();
    this._validTags.add("inventions");
    this._validTags.add("technology");
    this._validTags.add("software");
    this._validTags.add("health");
    this._validTags.add("business");
    this._validTags.add("education");
  }

  async getIdeas() {
    try {
    const response = await IdeasApi.getIdeas();
    this._ideas = response.data.data;
    this.render();
  } catch (error) {
      console.log(error);
    }
  }

  addIdeaToList(idea) {
    this._ideas.push(idea);
    this.render();
  }

  getTagClass(tag) {
    let tagClass = "";
    if (this._validTags.has(tag)) {
      tagClass = `tag-${tag}`;
    } else {
      tagClass = "";
    }
    return tagClass;
  }
  render() {
    this._ideaListEl.innerHTML = this._ideas
      .map((idea) => {
        return `
        <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag ${this.getTagClass(idea.tag.toLowerCase())}">${idea.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>`;
      })
      .join("");
  }
}

export default IdeaList;
