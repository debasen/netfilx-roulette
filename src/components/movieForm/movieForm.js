import './movieForm.scss'

export const MovieForm = ({movie, onSubmit}) => {
    return (
        <div class="form-container">
        <div class="form-heading">ADD MOVIE</div>
        <div className="form-grid">
          <div class="form-field">
            <label class="form-label" for="title">TITLE</label>
            <input class="form-input form-placeholder" type="text" id="title" placeholder="Enter the movie title" />
          </div>
          <div class="form-field">
            <label class="form-label" for="releaseDate">RELEASE DATE</label>
            <input class="form-input" type="date" id="releaseDate" />
          </div>
          <div class="form-field">
            <label class="form-label" for="movieUrl">MOVIE URL</label>
            <input class="form-input form-placeholder" type="text" id="movieUrl" placeholder="Enter the movie URL" />
          </div>
          <div class="form-field">
            <label class="form-label" for="rating">RATING</label>
            <input class="form-input form-placeholder" type="text" id="rating" placeholder="Enter the movie rating" />
          </div>
          <div class="form-field">
            <label class="form-label" for="genre">GENRE</label>
            <select class="form-select" id="genre">
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="sci-fi">Sci-Fi</option>
            </select>
          </div>
          <div class="form-field">
            <label class="form-label" for="runtime">RUNTIME</label>
            <input class="form-input form-placeholder" type="text" id="runtime" placeholder="Enter the movie runtime" />
          </div>
        </div>
        <div class="form-field overview">
            <label class="form-label" for="overview">OVERVIEW</label>
            <textarea class="form-textarea form-placeholder" rows="4" id="overview" placeholder="Enter the movie overview"></textarea>
          </div>
        <div className="form-action">
          <button class="form-reset-button" type="reset">RESET</button>
          <button class="form-button" type="submit">SUBMIT</button>
        </div>
      </div>
    );
}