function Searching(){
    return (
        <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
          <button className="btn btn-primary py-0" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    );
}
export default Searching;