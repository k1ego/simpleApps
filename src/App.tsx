import { useState } from 'react';
import './App.scss';
import logo from './assets/logo.png';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='header'>
				<div className='container'>
					<div className='header__inner'>
						<div className='header__logo'>
							<a href=''>
								<img src={logo} alt='Logo' />
							</a>
						</div>
						<nav className={`header__menu ${isOpen ? 'open' : ''}`}>
							<ul>
								<a className='nav__link' href=''>
									About me
								</a>
								<a className='nav__link' href='#'>
									Contact
								</a>
								<a className='nav__link' href='#'>
									Projects
								</a>
							</ul>
						</nav>
						<div onClick={() => setIsOpen(!isOpen)} className='burger'>
							<span></span>
						</div>
					</div>
				</div>
			</div>

			<div className='intro'>
				<div className='intro__container'>
					<div className='intro__inner'>
						<div className='intro__title'>
							<h1 className='intro__title-text'>
								Start your morning not with <br />
								coffee but with a cigarette !
							</h1>
						</div>
						<div className='intro__subtitle'>
							<p>
								Hey there! My name is Ladonin Kirill, and I'm a passionate 🥇,
								creative 🎨, and perceptive 🔭 person 🔧 with a hands-on
								approach to problem-solving and an unending thirst for knowledge
								📚. Anything and everything that can be classified as technology
								💻 fascinates me.{' '}
							</p>
							<br />
							<p>
								Currently, I'm based in the beautiful city of Saint Petersburg
								🌉 where I develop web applications 📊 I also study at a
								university called SUAI🎓
							</p>
							<br />
							<p>
								When I'm not immersed in the world of technology, you can find
								me on the city streets. Apart from that, I love listening to
								music 🎶.
							</p>
							<br />
							<p>
								I'm always open to new ideas and opportunities. You can connect
								with me on Telegram or Discord 👥. Feel free to reach out to me
								directly at mail 📧. Let's connect and explore exciting
								possibilities together! 🚀
							</p>
						</div>
						<button className='intro__btn'>Перейти к проектам</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
