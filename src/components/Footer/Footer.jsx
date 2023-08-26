import { Link } from "react-router-dom"

function Footer() {
  return (
    <div>
        <div className="footer">
            <p>&copy; Copyright 2023 - Todos los derechos reservados <br />
            <Link to="https://github.com/MauLazaro"><i className="ri-github-fill"></i> GitHub</Link></p>
        </div>
    </div>
  )
}

export default Footer