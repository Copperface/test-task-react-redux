import React from 'react';

const CatalogView = ({ cityData }) => (
  <table>
    <tbody>
      {cityData.map(({
        id,
        created,
        modified,
        name
      }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{created}</td>
            <td>{modified}</td>
            <td>{name}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
)

export default CatalogView;