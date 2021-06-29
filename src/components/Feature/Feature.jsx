import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./feature.scss";

const Feature = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Anime</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWL4YQk1KRGqB9JIiWFgQrFAgmzfQpugwf3-6-6jjyjeV-5XQgdazcWUCaT0U4KTa3MEdL8Lgur90o0MkluWLShaOHNZ.jpg?r=90a" alt="featured"/>
            <div className="info">
                <img src="https://www.thehollywoodnews.com/wp-content/uploads/theiceroad-1024x515.jpg" alt="info"/>
                <span className="desc">
                    After a remote diamond mine collapses in far northern Canada, a 'big-rig' ice road driver (Liam Neeson) 
                    must lead an impossible rescue mission over a frozen ocean to save the trapped miners.
                    Contending with thawing waters and a massive storm, they discover the real threat is one they never saw coming. 
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Feature
