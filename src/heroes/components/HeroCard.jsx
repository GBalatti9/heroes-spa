import { Link } from "react-router-dom"

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroeImageUrl = `/assets/heroesImg/${ id }.jpg`

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroeImageUrl } className="card-img" alt={ superhero } />
                    </div>

                    <div className="col-8">
                        <h4 className="card-title"> { superhero } </h4>
                        <p className="card-text"> { alter_ego } </p>
                        {
                            ( alter_ego !== characters ) && (<p>{ characters }</p>)
                        }

                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>

                        <Link to={`/hero/${ id }`}>
                            Mas info...
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}
