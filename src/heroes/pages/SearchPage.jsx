import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    
    const { q = '' } = queryString.parse( search );

    const heroes = getHeroesByName( q );

    const { searchText, handleInputChange } = useForm({
        searchText: q
    });

    const handleSearchSubmit = ( e ) => {
        e.preventDefault();

        if ( searchText.trim().length <= 1 ) return;

        navigate(`?q=${ searchText }`)

        console.log({ searchText });
    }

    return (
        <>
            <h1>Seaarch</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ handleSearchSubmit }>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>

                </div>
                    <div className="col-7">
                        <h4>Results</h4>
                        <hr />

                        {
                            // If q is empty then show 'Search a hero' message. Else asks if heroes.length is equal to 0, if that is the case then show 'No hero found' message.
                            ( q === '' )
                            ? <div className="alert alert-primary"> Search a hero </div>
                            : ( heroes.length === 0 ) && <div className="alert alert-danger"> No hero found </div>
                        }

                        {
                            heroes.map(( hero ) => (
                                <HeroCard key={ hero.id } { ...hero }/>
                            ))
                        }
                </div>
            </div>
        </>
    )
}
