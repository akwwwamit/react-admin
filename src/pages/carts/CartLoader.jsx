let CartLoader=()=>{
    return (
        <>
              <table className="table table-bordered mg-b-0 text-md-nowrap">
                    <thead>
                        <tr style={{backgroundColor:'#008acc'}}>
                            <th>Total Products</th>
                            <th>Total Quantity</th>
                            <th>Discount</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.from({ length: 5 }).map((_, idx) => (
                                <tr key={idx}>
                                    {Array.from({ length: 4 }).map((_, cellIdx) => (
                                    <td key={cellIdx}>
                                        <div className="skeleton"></div>
                                    </td>
                                    ))}
                                </tr>
                            ))
                        }
                    </tbody>
               </table>
        </>
    )
}
export default CartLoader;