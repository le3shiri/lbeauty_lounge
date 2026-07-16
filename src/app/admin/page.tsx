export default function AdminDashboard() {
  return (
    <div className="admin-dashboard" style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 className="font-serif" style={{ fontSize: '36px', color: 'var(--color-secondary)' }}>Spa Management Dashboard</h1>
          <button className="btn btn-primary" style={{ padding: '10px 20px' }}>Generate Report</button>
        </div>

        {/* Overview Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '14px', color: '#888', textTransform: 'uppercase', marginBottom: '10px' }}>Today's Bookings</h3>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--color-secondary)' }}>24</div>
          </div>
          <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '14px', color: '#888', textTransform: 'uppercase', marginBottom: '10px' }}>Revenue (Today)</h3>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--color-primary)' }}>3,450 MAD</div>
          </div>
          <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '14px', color: '#888', textTransform: 'uppercase', marginBottom: '10px' }}>Total Clients</h3>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--color-secondary)' }}>1,284</div>
          </div>
          <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '14px', color: '#888', textTransform: 'uppercase', marginBottom: '10px' }}>Staff Available</h3>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--color-secondary)' }}>12/15</div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
          
          {/* Upcoming Appointments */}
          <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 className="font-serif" style={{ fontSize: '24px', marginBottom: '20px' }}>Upcoming Appointments</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee', color: '#888', textTransform: 'uppercase', fontSize: '12px' }}>
                  <th style={{ padding: '15px 0' }}>Client</th>
                  <th style={{ padding: '15px 0' }}>Service</th>
                  <th style={{ padding: '15px 0' }}>Time</th>
                  <th style={{ padding: '15px 0' }}>Therapist</th>
                  <th style={{ padding: '15px 0' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px 0' }}>Emma Watson</td>
                  <td style={{ padding: '15px 0' }}>Swedish Massage</td>
                  <td style={{ padding: '15px 0' }}>09:00 AM</td>
                  <td style={{ padding: '15px 0' }}>Sarah Jenkins</td>
                  <td style={{ padding: '15px 0' }}><span style={{ background: '#e6f4ea', color: '#1e8e3e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Confirmed</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px 0' }}>Michael Jordan</td>
                  <td style={{ padding: '15px 0' }}>Deep Tissue</td>
                  <td style={{ padding: '15px 0' }}>10:30 AM</td>
                  <td style={{ padding: '15px 0' }}>Michael Chen</td>
                  <td style={{ padding: '15px 0' }}><span style={{ background: '#e6f4ea', color: '#1e8e3e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Confirmed</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px 0' }}>Olivia Pope</td>
                  <td style={{ padding: '15px 0' }}>Anti-Aging Facial</td>
                  <td style={{ padding: '15px 0' }}>11:00 AM</td>
                  <td style={{ padding: '15px 0' }}>Elena Rostova</td>
                  <td style={{ padding: '15px 0' }}><span style={{ background: '#fef7e0', color: '#b08d00', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quick Actions & Popular Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h2 className="font-serif" style={{ fontSize: '24px', marginBottom: '20px' }}>Quick Actions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button className="btn btn-outline" style={{ width: '100%', textAlign: 'left', padding: '12px 20px' }}>+ Add New Booking</button>
                <button className="btn btn-outline" style={{ width: '100%', textAlign: 'left', padding: '12px 20px' }}>+ Manage Services</button>
                <button className="btn btn-outline" style={{ width: '100%', textAlign: 'left', padding: '12px 20px' }}>+ View Staff Schedule</button>
              </div>
            </div>

            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h2 className="font-serif" style={{ fontSize: '24px', marginBottom: '20px' }}>Popular Services</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: 'var(--color-secondary)' }}>
                  <span>Swedish Massage</span>
                  <strong>45%</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: 'var(--color-secondary)' }}>
                  <span>Anti-Aging Facial</span>
                  <strong>25%</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: 'var(--color-secondary)' }}>
                  <span>Full Relaxation Day</span>
                  <strong>20%</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-secondary)' }}>
                  <span>Body Scrub</span>
                  <strong>10%</strong>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
