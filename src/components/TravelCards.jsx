
export function TravelCards(props) {
	return (
  
        <>
       
		<div className='card  p-5 mb-5 mt-5'>
           
			<section >
                
				<img className="card-img" src="./imageUrl" alt="images" />
			
			
				<span className='material-symbols-outlined'>location_on</span>
				<span className="card-country">{props.item.country} </span>
				<a href={props.item.googleMapLink}>View on Google Maps</a>
				<h3 className="card-country-title">{props.item.title}</h3>
				<h4 className="card-date">{props.item.date}</h4>
				<p>{props.item.description}</p>
				<span>Read more..</span>
			</section>

		</div>
        </>
	)
}