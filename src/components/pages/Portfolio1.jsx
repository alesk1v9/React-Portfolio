import expenseTrackerImg from '../../assets/projects images/expenseTracker.png';
import noteTakerImg from '../../assets/projects images/noteTaker.png';
import passwordGeneratorImg from '../../assets/projects images/passwordGenerator.png';
import recipeFinderImg from '../../assets/projects images/recipeFinder.png';
import weatherDashboardImg from '../../assets/projects images/weatherDashboard.png';

export default function Portfolio() {
    return (
      
      <div>
        <h1>Portfolio</h1>

        <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid text-white py-5 bg-custom">

          {/* Expense Tracker */}
          <div className="col">
            <div className="card">
              <img src={expenseTrackerImg} alt="Project-Img" className="card-img-top" style={{ width: '100%', height: '100%' }} />
              <div className="card-body">
                <h5 className="card-title"> Expense Tracker:  <a href="https://afternoon-plains-88345-4279b3a41bbe.herokuapp.com/">Heroku Deployed App</a></h5>
                <h5 className="card-title"> <a href="https://github.com/JackeGould/expense-tracker">GitHub Link</a></h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>


          {/* Note Taker */}
          <div className="col">
            <div className="card">
              <img src={noteTakerImg} alt="Project-Img" className="card-img-top" style={{ width: '100%', height: '100%' }} />
              <div className="card-body">
                <h5 className="card-title"> Note Taker:  <a href="https://mysterious-meadow-80413-9a1a83adbc2c.herokuapp.com/">Heroku Deployed App</a></h5>
                <h5 className="card-title"> <a href="https://github.com/alesk1v9/Note-Taker.git">GitHub Link</a></h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>

          {/* Password Generator */}
          <div className="col">
            <div className="card">
              <img src={passwordGeneratorImg} alt="Project-Img" className="card-img-top" style={{ width: '100%', height: '100%' }} />
              <div className="card-body">
                <h5 className="card-title"> Password Generator:  <a href="https://alesk1v9.github.io/Password-Generator/">Deployed App</a></h5>
                <h5 className="card-title"><a href="https://github.com/alesk1v9/Password-Generator.git">GitHub Link</a></h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>

          {/* Recipe Finder */}
          <div className="col">
            <div className="card">
              <img src={recipeFinderImg} alt="Project-Img" className="card-img-top" style={{ width: '100%', height: '100%' }} />
              <div className="card-body">
                <h5 className="card-title"> Recipe Finder:  <a href="https://gibinmgeorge.github.io/Recipe_Finder/">Deployed App</a></h5>
                <h5 className="card-title"><a href="https://github.com/GibinMGeorge/Recipe_Finder.git">GitHub Link</a></h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>

          {/* Weather Dashboard */}
          <div className="col">
            <div className="card">
              <img src={weatherDashboardImg} alt="Project-Img" className="card-img-top" style={{ width: '100%', height: '100%' }} />
              <div className="card-body">
                <h5 className="card-title"> Weather Dashboard:  <a href="https://alesk1v9.github.io/Weather-Dashboard/">Deployed App</a></h5>
                <h5 className="card-title"><a href="https://github.com/alesk1v9/Weather-Dashboard.git">GitHub Link</a> </h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }