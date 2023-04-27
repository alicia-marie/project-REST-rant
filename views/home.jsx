const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/salad.jpg" alt="Salad" width="800px" />
              </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
          </main>
      </Def>
    )
}

module.exports = home
