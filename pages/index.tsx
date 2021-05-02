import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Card, Badge, Alert } from 'react-bootstrap';
import { GiToken } from 'react-icons/gi';
import { FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Home(): JSX.Element {
  const [isShow, setShow] = useState(false);
  const handleShow = () => setShow((prev) => !prev);
  return (
    <>
      <Head>
        <title>Superbase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="bg-info text-white pt-5 fixed-top">
          <div className="d-flex justify-content-between align-items-center px-4 mt-4">
            <div>
              <Image
                src="/sb-logo.jpg"
                width="70"
                height="70"
                alt="super base"
              />
            </div>
            <div>
              <i className="h3">SuperBASE</i>
            </div>
            <div style={{ cursor: 'pointer' }}>
              <GiHamburgerMenu color="gold" size="55" onClick={handleShow} />
            </div>
          </div>
          {isShow && (
            <div className="text-center">
              <hr />
              <h3>Home</h3>
              <hr />
              <h3>About Us</h3>
            </div>
          )}
        </div>
        <div className="d-flex justify-content-center align-items-center bg-warning fixed-top py-1">
          <div className="px-3">
            <a href="https://etherscan.io/address/0x92E1b3BfA290c65C42a5ba55eAaF8408f0f9dd34#code">
              <Image
                src="/etherscan-logo-circle.jpg"
                width="30"
                height="30"
                alt="super base"
              />{' '}
              Etherscan
            </a>
          </div>
          <div className="px-3">
            <a href="https://medium.com/@superrbase">
              <FaMedium size="30" /> Medium
            </a>
          </div>
          <div className="px-3">
            <a href="https://t.me/superbasemain">
              <FaTelegram size="30" /> Telegram
            </a>
          </div>
          <div className="px-3">
            <a href="https://twitter.com/SuperrBase">
              <FaTwitter size="30" /> Twitter
            </a>
          </div>
        </div>
      </header>

      <main
        style={{
          backgroundColor: '#113',
          paddingTop: '6.5rem',
        }}
      >
        <div className="mt-5 mx-auto text-center w-75">
          <Alert variant="success">
            Hourly Constant 5% Rebase System with Advanced Synthetic Tokenomics
          </Alert>
        </div>
        <div className="container-fluid py-4 text-white">
          <Image
            src="/sb-logo.jpg"
            width="200"
            height="100"
            sizes="100"
            alt="super base"
          />
          <div
            style={{
              backgroundImage: 'url(/eth.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="container">
              <h2 className="pt-5 display-4 text-primary">
                Introducing{' '}
                <i
                  style={{
                    color: 'crimson',
                    fontWeight: 'bold',
                  }}
                >
                  SuperBASE
                </i>
              </h2>
              <hr className="bg-danger" />
              <br />
              <div>
                <p
                  className="rounded p-3 h4"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    lineHeight: 2,
                  }}
                >
                  <b className="text-danger">
                    <i>Super Base</i>
                  </b>{' '}
                  combines the rebasing concept, auto liquidity generation and
                  the big brained RFI tech by taking a 10% fee on every uniswap
                  sell. That fee is broken up into 2 parts:
                </p>
                <ol
                  className="rounded py-5 h4"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexBasis: '100%',
                    flexWrap: 'wrap',
                    gap: 25,
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    lineHeight: 2,
                  }}
                >
                  <li style={{ maxWidth: 300 }}>
                    <Badge variant="primary">
                      <span className="h4">Reflection</span>
                    </Badge>{' '}
                    — 5% of the fee is distributed to every wallet that holds
                    SBASE on a percentage basis. The more SBASE you hold the
                    more tokens you will receive.
                  </li>
                  <br />
                  <li style={{ maxWidth: 300 }}>
                    <Badge variant="primary">
                      <span className="h4">LP Generation</span>
                    </Badge>{' '}
                    — with remaining 5%; 2.5% of the fee collected in SBASE is
                    sold into ETH; that ETH is married up with the remaining
                    2.5% of SBASE and deposited back into the uniswap liquidity
                    pool.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="my-5 bg-white p-5">
            <h2 className="text-center my-5 text-dark">
              <Image
                src="/uniswap-logo.png"
                width="32"
                height="32"
                alt="uniswap logo"
              />{' '}
              uniSwap 10% Fee Breakdown
            </h2>
            <div className="text-center">
              <Image
                src="/uniswap-fee.png"
                width="350"
                height="350"
                alt="chart"
              />
            </div>
          </div>
          <hr className="bg-danger" />
          <br />
          <div
            style={{
              backgroundImage: 'url(/sbcryptoanalysis.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              padding: '5rem 0',
            }}
          >
            <div className="container">
              <h2 className="display-4">
                What makes{' '}
                <i
                  style={{
                    color: 'crimson',
                    fontWeight: 'bold',
                  }}
                >
                  SuperBASE
                </i>{' '}
                special:
              </h2>
              <hr className="bg-danger" />
              <br />
              <div
                className="rounded p-3"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexBasis: '100%',
                  flexWrap: 'wrap',
                  gap: 10,
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  lineHeight: 2,
                  color: 'black',
                }}
              >
                <Card
                  style={{
                    maxWidth: 320,
                  }}
                >
                  <Card.Header>
                    <h3>Rebase Mechanism</h3>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      5% rebase occurs every hour if price is above peg, that
                      means holders get 5% extra tokens every hour if price is
                      above peg
                    </p>
                    <p>No negative rebase.</p>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    maxWidth: 320,
                  }}
                >
                  <Card.Header>
                    <h3>Dynamic Peg</h3>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      Peg price increases by 50% after two back to back rebase.
                    </p>
                    <p>
                      Peg price decreases by 20% after two hours of no rebase.
                    </p>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    maxWidth: 320,
                  }}
                >
                  <Card.Header>
                    <h3>Auto-Liquidity Generation</h3>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      3.75% of the sell fees collected from sellers are paired
                      with ETH to generate liquidity pool tokens, which are
                      locked forever in the contract.
                    </p>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    maxWidth: 320,
                  }}
                >
                  <Card.Header>
                    <h3>Friction-less Yield</h3>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      Holders earn passive rewards 0f 5% of the sell fees
                      through reflection as they watch their balance of
                      SuperBase grow indefinitely.
                    </p>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    maxWidth: 320,
                  }}
                >
                  <Card.Header>
                    <h3>Advance Burn Reaction</h3>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      The supply of SBASE is also deflationary where 1.25% of
                      Super BASE token collected from sell fees is burnt through
                      sell fees.
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-wrap bg-white">
            <Card
              style={{
                maxWidth: 'fit-content',
                margin: '0 auto',
                color: 'black',
              }}
            >
              <Card.Header>
                <h4>
                  <GiToken size="45" color="gold" /> SBASE Tokenomics
                </h4>
              </Card.Header>
              <Card.Body>
                <div
                  className="container"
                  style={{
                    fontSize: '1.1rem',
                  }}
                >
                  <p className="bg-info badge-pill p-1 text-center">
                    Token Name &rarr;{' '}
                    <span className="text-danger h4">Super Base</span>
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Token Symbol &rarr;{' '}
                    <span className="text-danger h4">SBASE</span>
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Total Supply &rarr;{' '}
                    <Badge variant="success">6,700,000</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Private Sale &rarr;{' '}
                    <Badge variant="success">468, 750</Badge> (7%){' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Presale &rarr; <Badge variant="success">2,638,910</Badge>{' '}
                    (40%)
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Liquidity &rarr; <Badge variant="success">2,750,000</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Marketing &rarr; <Badge variant="success">486,000</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Team &rarr; <Badge variant="success">356,340</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    To Be Burnt &rarr;{' '}
                    <Badge variant="success">1,825,700</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                  <p className="bg-info badge-pill p-1 text-center">
                    Initial Market Cap &rarr;{' '}
                    <Badge variant="success">$383k</Badge>{' '}
                    <GiToken size="25" color="gold" />
                  </p>
                </div>
              </Card.Body>
            </Card>
            <div
              style={{
                width: 400,
                margin: '7rem auto',
              }}
            >
              <Image src="/sbchart.png" width="420" height="350" alt="chart" />
            </div>
          </div>
          <div className="container py-5">
            <Card className="text-dark">
              <Card.Header className="h3">Presale Details</Card.Header>
              <Card.Body>
                <Alert variant="info">
                  <ul>
                    <li>Presale will be hosted on uniCrypt.</li>
                    <li>
                      Trading on uniSwap will be immediately after presale is
                      over.
                    </li>
                    <li>Locking of liquidity immediately upon listing.</li>
                  </ul>
                </Alert>
                <hr />
                <br />
                <Badge variant="primary pill">
                  Date - 2nd of May, 12:00 PM
                </Badge>
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-6 h5">Hardcap: </div>
                    <div className="col-auto">80 ETH</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-6 h5">Private Sale: </div>
                    <div className="col-auto">
                      10 ETH (1 ETH = 31,250 SBASE)
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-6 h5">Min & Max buy per wallet: </div>
                    <div className="col-auto">1 ETH</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-6 h5">Public Sale: </div>
                    <div className="col-auto">
                      70 ETH (1 ETH = 27,778 SBASE)
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-6 h5">Min buy per wallet: </div>
                    <div className="col-auto">1 ETH</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-6 h5">Max buy per wallet: </div>
                    <div className="col-auto">3 ETH</div>
                  </div>
                  <hr />
                  <div
                    style={{
                      margin: '0 auto',
                      width: 200,
                    }}
                  >
                    <Alert variant="info" className="my-4 text-center">
                      Presale duration is <i className="text-primary h4">24</i>{' '}
                      hours max!
                    </Alert>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <a href="https://etherscan.io/address/0x92E1b3BfA290c65C42a5ba55eAaF8408f0f9dd34#code">
                  <Image
                    src="/etherscan-logo-circle.jpg"
                    width="30"
                    height="30"
                    alt="super base"
                  />
                </a>{' '}
                <i>Etherscan</i>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-secondary-50 p-2">
        <div className="d-flex justify-content-between">
          <div>SuperBase&copy;2021</div>
          <div>
            <span className="px-2">
              <a href="https://etherscan.io/address/0x92E1b3BfA290c65C42a5ba55eAaF8408f0f9dd34#code">
                <Image
                  src="/etherscan-logo-circle.jpg"
                  width="30"
                  height="30"
                  alt="super base"
                />
              </a>
            </span>
            <span className="rounded px-2">
              <a href="https://medium.com/@superrbase">
                <FaMedium size="30" />
              </a>
            </span>
            <span className="rounded px-2">
              <a href="https://t.me/superbasemain">
                <FaTelegram size="30" />
              </a>
            </span>
            <span className="rounded px-2">
              <a href="https://twitter.com/SuperrBase">
                <FaTwitter size="30" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
