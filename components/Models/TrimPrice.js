export default function TrimPrice({selectedCar}) {
    return (
      <section>
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-6 text-center">트림별 가격</h2>

          <div className="flex justify-center">
            <table className="models-trimprice-table">
              <thead>
                <tr>
                  {/* 항목 */}
                  {/* <th className="text-left px-4">항목</th> */}

                  {/* 트림 이름 */}
                  {selectedCar.trims.map((trim, index) => (
                    <th key={index} className="py-2 px-4 text-left">{trim.name}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {/* 가격 row */}
                <tr className="bg-gray-50 border-b border-gray-200">
                  {/* <td className="bg-gray-50 border-b border-gray-200 px-4">가격</td> */}
                  {selectedCar.trims.map((trim, index) => (
                    <td key={index} className="py-2 px-4">{trim.price}</td>
                  ))}
                </tr>

                {/* 옵션 row */}
                {selectedCar.trims[0].options.map((_, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {/* <td className="py-2 px-4">
                      {selectedCar.trims[0].options[rowIndex].label}
                    </td> */}
                    {selectedCar.trims.map((trim) => (
                      <td key={trim.name} className="py-2 px-4">
                        {trim.options[rowIndex].value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

        </div>
      </section>

      // <section>
      //   <div className="py-8">
      //     <h2 className="text-3xl font-bold mb-6 text-center">트림별 가격</h2>

      //     <div className="flex justify-center">
      //       <table className="models-timprice-table border border-gray-300">
      //         <thead>
      //           <tr className="bg-gray-100 border-b border-gray-300 text-base">
      //             {/* 항목 */}
      //             <th className="py-2 px-4 text-left">항목</th>

      //             {/* 트림 이름 */}
      //             {selectedCar.trims.map((trim, index) => (
      //               <th key={index} className="py-2 px-4 text-left">{trim.name}</th>
      //             ))}
      //           </tr>
      //         </thead>

      //         <tbody>
      //           {/* 가격 row */}
      //           <tr className="bg-gray-50 border-b border-gray-200">
      //             <td className="py-2 px-4 font-semibold">가격</td>
      //             {selectedCar.trims.map((trim, index) => (
      //               <td key={index} className="py-2 px-4">{trim.price}</td>
      //             ))}
      //           </tr>

      //           {/* 옵션 row */}
      //           {selectedCar.trims[0].options.map((_, rowIndex) => (
      //             <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
      //               <td className="py-2 px-4">
      //                 {selectedCar.trims[0].options[rowIndex].label}
      //               </td>
      //               {selectedCar.trims.map((trim) => (
      //                 <td key={trim.name} className="py-2 px-4">
      //                   {trim.options[rowIndex].value}
      //                 </td>
      //               ))}
      //             </tr>
      //           ))}
      //         </tbody>
      //       </table>
      //       </div>

      //   </div>
      // </section>
    );
}