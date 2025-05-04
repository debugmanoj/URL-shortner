import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AxiosService from '../utils/Axios';
import apiRoutes from '../Routes/APIRoutes';
import AllLinkeItems from './AllLinkeItems';
import { useSelector } from 'react-redux';

function AllLinks() {
  const [datas, setDatas] = useState([]);
  const { userId } = useSelector((state) => state.auth);
  const { name } = useParams();

  const getAllData = async () => {
    try {
      const linkResult = await AxiosService.get(`${apiRoutes.getAllLinks.path}/${userId}`);
      if (linkResult.status === 200) {
        setDatas(linkResult.data.result);
      }
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#F9FAFB] to-[#ffffff] min-h-screen  bg-blackpy-8 font-figtree rounded-lg">
      <div className="max-w-6xl mx-auto px-4 p-5">
        <h1 className="text-xl font-extrabold text-center text-gray-800 mb-6">My Short Links</h1>

        {/* Wrapper with smooth hidden scroll */}
        <div className="overflow-x-auto max-h-[500px] scrollbar-hide rounded-lg shadow-md bg-white transition-all duration-300">
          <table className="min-w-full table-auto">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-4 py-2 text-sm font-medium text-center font-figtree">#</th>
                <th className="px-4 py-2 text-sm font-medium text-center font-figtree">Short Name</th>
                <th className="px-4 py-2 text-sm font-medium text-center font-figtree">Short Link</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {datas && datas.map((val, i) => (
                <AllLinkeItems val={val} index={i + 1} key={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllLinks;
