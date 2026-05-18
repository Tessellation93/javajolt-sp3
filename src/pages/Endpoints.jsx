import { endpointGroups } from '../data/endpoints.js'
import styles from './Endpoints.module.css'

function Endpoints() {
  return (
    <section className={styles.endpoints}>
      <h1>API Endpoints</h1>
      <p className={styles.note}>
        Public endpoints need no token. All others require a valid JWT in the
        Authorization header.
      </p>

      {endpointGroups.map((group) => (
        <div key={group.group} className={styles.group}>
          <h2>{group.group}</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Method</th>
                <th>Path</th>
                <th>Description</th>
                <th>Auth</th>
              </tr>
            </thead>
            <tbody>
              {group.endpoints.map((e) => (
                <tr key={e.method + e.path}>
                  <td>
                    <span className={styles.method + ' ' + styles[e.method.toLowerCase()]}>
                      {e.method}
                    </span>
                  </td>
                  <td className={styles.path}>{e.path}</td>
                  <td>{e.desc}</td>
                  <td>{e.auth ? 'JWT' : 'Public'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  )
}

export default Endpoints
