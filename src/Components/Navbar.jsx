import react,{useState} from 'react';

function Header(){
    const [nav,setnav]=useState(false);
    const changeBackground=()=>{
        if(window.scrollY>=50){
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground)
    return(
        <div id='main'>
            <nav className=''>
                <a href='#' className='logo'>
                    <img src='logo' alt=''/>
                </a>
                <input type='checkbox' classname='menu-btn' id='menu-btn'/>
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><a href='#'>Home </a></li>
                    <li><a href='#'>Features </a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>services </a></li>
                </ul>
            </nav>


        </div>
    )
}

export default Header;
