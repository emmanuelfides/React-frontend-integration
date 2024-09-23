import './index.css';
import img from '../../assets/images/r2.png'

function Roadmap() {
  return (
    <div className='roadmap_container'>
      <div className='theme_heading'>
        <h1>ROADMAP</h1>
        <h2>ROADMAP</h2>
      </div>
      <div className='roadmap_content'>
        <img src={img} alt='' />
      </div>
    </div>
  );
}

export default Roadmap;
