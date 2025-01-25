export default function Table() {
    return (
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Order No</th>
            <th className="p-3">Supplier</th>
            <th className="p-3">Date</th>
            <th className="p-3">Total</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">RHPO-123456</td>
            <td className="p-3">Fidson Healthcare</td>
            <td className="p-3">5/21/2024</td>
            <td className="p-3">₦2,055,043</td>
            <td className="p-3 text-green-500">Approved</td>
          </tr>
        </tbody>
      </table>
    );
  }
  