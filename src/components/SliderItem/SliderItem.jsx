import { Link } from 'react-router-dom';
import './sliderItem.css';

export const SliderItem = ({ children, title, backgroundImg }) =>{
    return (
        <div
			className='slider-item-container'
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			<article className='slider-item-content'>
				<h3 className='slider-item-title'>{title}</h3>
				<h2 className='slider-item-description'>{children}</h2>
				<Link to="/products" className='primary-button'>Compra ahora</Link>
			</article>
		</div>
    )
    
}