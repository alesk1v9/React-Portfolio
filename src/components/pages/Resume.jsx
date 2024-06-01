export default function Resume() {

  const proficiencies = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'JQUERY',
    'NODE',
    'MONGODB',
    'EXPRESS',
    'REACT',
    'SQL',
    'GIT & GITHUB'
  ];

  return (
    <div>
      <h1>Resume </h1>

      <div className="container-fluid">
        <div className="container mt-5">
          <a className="btn btn-primary mb-4" href="https://drive.google.com/file/d/1KOYJCXqGt2DxGm0LXJdEjo1XRRrc6kxJ/view?usp=drive_link" download>Download Resume</a>
          <h3>Proficiencies</h3>
          <ul className="list-group">
            {proficiencies.map((proficiency, index) => (
              <li className="list-group-item" key={index}>
                {proficiency}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}