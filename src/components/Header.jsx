import React, { useEffect, useState } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { GiCoffeeCup ,GiNightSleep} from "react-icons/gi";



export default function Header({userName}) {
  const [greeting, setGreeting] = useState('Hello');
  const [greetingIcon,sergreetingIcon] = useState(<IoSunnyOutline size={50} />);
  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      {
        setGreeting('Good Morning');
        sergreetingIcon(<GiCoffeeCup size={50} />)
      }
      
    } else if (currentHour   < 18) {
      setGreeting('Good Evening');
      sergreetingIcon(<IoSunnyOutline size={50} />)
    } else {
      setGreeting('Good Night');
      sergreetingIcon(<GiNightSleep  size={50} />)
    }
  }, []);
  
  return (
    
      <header className='header'>
      <div className='greeting'>{greetingIcon}<h1>{greeting}</h1></div>
      <div><h2> {userName}!</h2></div>
      
    </header>
    
  )
}
