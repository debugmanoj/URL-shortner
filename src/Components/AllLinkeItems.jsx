import React from 'react';

function AllLinkeItems({ val, index }) {
  return (
    <tr className="font-figtree hover:bg-gray-50 transition-all duration-200">
      <th scope="row" className="text-center text-xs font-medium">{index}</th>
      <td className="text-center text-xs">{val.name}</td>
      <td className="text-center text-xs">
        <a
          className="btn ownButton text-xs text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
        >
          {val.link}
        </a>
      </td>
    </tr>
  );
}

export default AllLinkeItems;
