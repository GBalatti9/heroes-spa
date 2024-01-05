import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";


export const HeroPage = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const hero = getHeroeById( id );

    const handleNavigateBack = ( publisher ) => {
        
        if ( publisher === 'DC Comics' )     navigate( '/dc' );
        if ( publisher === 'Marvel Comics' ) navigate( '/marvel' );
    }

    if ( !hero ) {
        return <Navigate to='/marvel' />;
        
    }
    
    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <img 
                        src={`/assets/heroesImg/${ id }.jpg`} 
                        alt={ hero.superhero }
                        className="img-thumbnail" />
                </div>
                <div className="col-8">
                    <h3>{ hero.superhero }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b> Alter ego: </b> { hero.alter_ego } </li>
                        <li className="list-group-item"> <b> Publisher: </b> { hero.publisher } </li>
                        <li className="list-group-item"> <b> First appearance: </b> { hero.first_appearance } </li>
                    </ul>

                    <h5 className="mt-3"> Characters </h5>
                    <p>{ hero.characters }</p>

                    <div className="d-flex justify-content-around">
                        <button 
                            className="btn btn-outline-primary"
                            onClick={() => handleNavigateBack( hero.publisher ) }>
                            Go to { hero.publisher }
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => handleNavigateBack( hero.publisher ) }>
                            Go to { hero.publisher === 'DC Comics' ? 'Marvel Comics' : 'DC Comics' }
                        </button>
                    </div>
                </div>
            </div>
            <h1>{ hero.superhero }</h1>
        </>
    )
}
