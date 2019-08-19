import React from 'react';
import { Link } from 'react-router-dom';

const CatalogView = ({ pagesData }) => (
  <table>
    <tbody>
      {pagesData.map(({
        id,
        created,
        modified,
        title,
        text,
        active,
        city: {
          name: city
        }
      }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{created}</td>
            <td>{modified}</td>
            <td>{city}</td>
            <td>{title}</td>
            <td>{text}</td>
            <td>{active}</td>
            <td>
              <Link to={`/page/${id}`}>Edit</Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
)

export default CatalogView;