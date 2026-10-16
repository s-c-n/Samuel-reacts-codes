
import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";


export default function Ipaddresstracker() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState(null);

  async function findIP(e) {
    e.preventDefault();

    try {
      const response = await fetch(`https://ipwho.is/${ip}`);
      const result = await response.json();

      if (!result.success) {
        alert("Invalid IP address or domain!");
        return;
      }

      setData(result);
    } catch (e){

        console.log(e)
      alert("Unable to find the IP address.");
    }
  }

  return (
    <div>
      <header>
        <h1>IP Address Tracker</h1>

        <form onSubmit={findIP}>
          <input
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Search IP address"
          />
          <button>➜</button>
        </form>
      </header>

      {data && (
        <div className="card">
          <div>
            <h4>IP ADDRESS</h4>
            <p>{data.ip}</p>
          </div>

          <div>
            <h4>LOCATION</h4>
            <p>{data.city}, {data.region}</p>
            <p>{data.postal}</p>
          </div>

          <div>
            <h4>TIMEZONE</h4>
            <p>{data.timezone?.utc}</p>
          </div>

          <div>
            <h4>ISP</h4>
            <p>{data.connection?.isp}</p>
          </div>
        </div>
      )}

      <MapContainer
        center={data ? [data.latitude, data.longitude] : [9.08, 8.67]}
        zoom={data ? 12 : 6}
        key={data?.ip || "default"}
        className="map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {data && (
          <Marker position={[data.latitude, data.longitude]} />
        )}
      </MapContainer>
    </div>
  );
}
