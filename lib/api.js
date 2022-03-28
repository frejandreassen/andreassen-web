import axios from 'axios'

// export async function getCV() {
//   const res = await axios.get(`https://frejandreassen.github.io/cv/Frej_Andreassen_CV_MAC.json`)
//   return res.data
// }


export async function getCV() {
  return {
    "settings": {
      "language": "EN",
      "lastUpdate": "2022-03-28",
      "MACVersion": "0.3"
    },
    "aboutMe": {
      "profile": {
        "name": "Frej",
        "surnames": "Andreassen",
        "title": "CEO Panamond AB / Entrepreneur",
        "description": "Hello, I am glad you have found my CV. In here, I will try to briefly describe my experiences and professional skills. In summary, my skills are Analytics, Finance, Software development and Entrepreneurship, and my professional experience range from large international banks to startups",
        "avatar": {
          "alt": "photo of Frej Andreassen",
          "link": "https://avatars.githubusercontent.com/u/58067540?v=4"
        },
        "birthday": "1987-09-30"
      },
      "relevantYearsOfExperience": 12,
      "relevantLinks": [{
          "type": "linkedin",
          "URL": "https://www.linkedin.com/in/frej-andreassen/",
          "description": "My Linkedin Profile Page"
        },
        {
          "type": "twitter",
          "URL": "https://twitter.com/FrejAndreassen",
          "description": "My Twitter Account"
        },
        {
          "type": "github",
          "URL": "https://github.com/frejandreassen",
          "description": "My GitHub Account"
        },
        {
          "type": "website",
          "URL": "https://andreassens.se/",
          "description": "My Blog"
        }
      ],
      "significativeRelationships": [
  
      ],
      "interestingFacts": [
  
      ],
      "recommendations": [
  
      ]
    },
    "experience": {
      "jobs": [{
          "organization": {
            "name": "Panamond AB",
            "description": "Credit Origination SaaS Platform",
            "URL": "https://www.panamond.com/",
            "image": {
              "alt": "Panamond Logo",
              "link": "https://panamond.com/images/logo.png"
            },
            "location": {
              "country": "SE",
              "region": "Halland",
              "municipality": "Falkenberg",
              "postalCode": "311 32",
              "address": "Kvarngatan 2"
            }
          },
          "type": "startup",
          "roles": [{
            "name": "CEO",
            "startDate": "2021-10-01",
            "challenges": [{
              "description": "Designing and building the company product",
              "actions": [
                "Design Event driven Micro-Service Architecture",
                "Develop Origination Software Service",
                "Deploy proof of concept and evaluate with early customers",
                "Develop Contract and Terms of Service agreement - Ensure compliance to Data privacy regulations",
                "Integrate service to credit bureaus, partners and PSD2 data providers"
              ]
            }],
            "competences": [{
                "name": "PowerPoint",
                "type": "tool"
              },
              {
                "name": "Excel",
                "type": "tool"
              },
              {
                "name": "GitLab",
                "type": "tool"
              },
              {
                "name": "Google Cloud Platform",
                "type": "tool"
              },
              {
                "name": "Visual Studio Code",
                "type": "tool"
              },
              {
                "name": "NodeJS",
                "type": "technology"
              },
              {
                "name": "React",
                "type": "technology"
              },
              {
                "name": "Next.js",
                "type": "technology"
              },
              {
                "name": "SQL",
                "type": "technology"
              },
              {
                "name": "Git",
                "type": "technology"
              }
            ],
            "referrals": [{
                "name": "Andreas",
                "surnames": "Johansson",
                "title": "CEO Wästgöta Finans AB",
                "contact": {
                  "publicProfiles": [{
                    "type": "linkedin",
                    "URL": "https://www.linkedin.com/in/andreas-johansson-9a6b202b/"
                  }]
                }
              },
              {
                "name": "Arash",
                "surnames": "Talabinejad",
                "title": "Chairman",
                "contact": {
                  "publicProfiles": [{
                    "type": "linkedin",
                    "URL": "https://www.linkedin.com/in/arashtalebinejad/"
                  }],
                  "contactMails": [
                    "at@panamond.com"
                  ]
                }
              }
            ]
          }]
        },
        {
          "organization": {
            "name": "Låntagarnas Sverige AB (svb)",
            "description": "Non-profit Consumer Finance Advisor and Broker with the mission to help Swedish consumers avoid overindebtness",
            "URL": "https://lantagarnas.se/",
            "image": {
              "alt": "Låntagarnas Logo",
              "link": "https://storage.googleapis.com/andreassens.appspot.com/L%C3%A5ntagarnas%20Logo%20Blue%201080x1080.png"
            },
            "location": {
              "country": "SE",
              "region": "Halland",
              "municipality": "Falkenberg"
            }
          },
          "type": "startup",
          "roles": [{
            "name": "Founder/CFO/CEO",
            "startDate": "2019-08-01",
            "challenges": [{
                "description": "Company Restructuring",
                "actions": [
                  "Communicate with company partners and stakeholders including board of directors and auditor",
                  "Terminate employee agreements",
                  "Filing for bankruptcy and assisting in the bankruptcy process",
                  "Securing rights to company intellectual property in restructured business"
                ]
              },
              {
                "description": "Managing Finances during Startup and Corona Pandemic",
                "actions": [
                  "Taking care of finances: payroll, projections, accounting, budgeting",
                  "Managing relations to auditor",
                  "Applying for and obtaining various governmental subsidies due to Corona Pandemic"
                ]
              },
              {
                "description": "Team building",
                "actions": [
                  "Recruit and build a core operational team of 5 people",
                  "Recruit and engage a board of directors (pro-bono)",
                  "Building culture and team engagement in remote working setup"
                ]
              },
              {
                "description": "Company bootstraping",
                "actions": [
                  "Roadshow to Swedish banks to obtain soft financing",
                  "Obtaining operational license from Swedish Financial Supervisory Atuhority",
                  "Designing and re-designing technical platform",
                  "Roadshow to build partnerships with Swedish banks for consumer loans intermediation"
                ]
              },
              {
                "description": "Developing Technical Platform",
                "actions": [
                  "Integration to Asset Money Laundering Information Service provider",
                  "Integration to Credit Bureau Service",
                  "Integration of 17 banks for consumer loans intermediation",
                  "DevOps: Maintaining the services operational in Google Cloud Platform",
                  "Developing new features and bugfixes to customer front end"
                ]
              }
            ],
            "competences": [{
                "name": "PowerPoint",
                "type": "tool"
              },
              {
                "name": "Excel",
                "type": "tool"
              },
              {
                "name": "GitLab",
                "type": "tool"
              },
              {
                "name": "Google Cloud Platform",
                "type": "tool"
              },
              {
                "name": "VisualStudio Code",
                "type": "tool"
              },
              {
                "name": "NodeJS",
                "type": "technology"
              },
              {
                "name": "React",
                "type": "technology"
              },
              {
                "name": "SQL",
                "type": "technology"
              },
              {
                "name": "Git",
                "type": "technology"
              }
            ],
            "referrals": [{
                "name": "Andreas",
                "surnames": "Johansson",
                "title": "CEO/Founder",
                "contact": {
                  "publicProfiles": [{
                    "type": "linkedin",
                    "URL": "https://www.linkedin.com/in/andreas-johansson-9a6b202b/"
                  }]
                }
              },
              {
                "name": "Hanna",
                "surnames": "Ivarsson",
                "title": "CMO",
                "contact": {
                  "publicProfiles": [{
                    "type": "linkedin",
                    "URL": "https://www.linkedin.com/in/hanna-e-ivarsson/"
                  }]
                }
              }
            ]
          }]
        },
        {
          "organization": {
            "name": "Santander Consumer Bank, Sweden",
            "description": "Nordic bank focused on consumer lending and borrowing. Subsidiary of Santander Consumer Finance and Banco Santander",
            "URL": "https://www.santanderconsumer.se/",
            "image": {
              "alt": "Santander Logo",
              "link": "https://www.santanderconsumer.se/assets/images/santander-logo-horisontal.svg"
            },
            "location": {
              "country": "SE",
              "region": "Stockholm",
              "municipality": "Solna"
            },
          },
          "type": "bigCorp",
          "roles": [
            {
              "name": "Head of Business Development B2C",
              "startDate": "2018-05-01",
              "finishDate": "2019-08-01",
              "challenges": [{
                  "description": "Business Development for products Cards & Payments, Insurances and Consumer loans",
                  "actions": [
                    
                  ]
                },
                {
                  "description": "Team Building during organizational restructuring",
                  "actions": [

                  ]
                },
                {
                  "description": "Providing organization with analytics and insights",
                  "actions": [
                    
                  ]
                }
              ],
              "competences": [{
                  "name": "PowerPoint",
                  "type": "tool"
                },
                {
                  "name": "Excel",
                  "type": "tool"
                },
                {
                  "name": "Trello",
                  "type": "tool"
                },
                {
                  "name": "Asana",
                  "type": "tool"
                },
                {
                  "name": "SAS Enterprise Guide",
                  "type": "tool"
                },
                {
                  "name": "JIRA",
                  "type": "tool"
                }
              ],
              "referrals": [
                {
                  "name": "Jörgen",
                  "surnames": "Sandahl",
                  "title": "B2C Director",
                  "contact": {
                    "publicProfiles": [{
                      "type": "linkedin",
                      "URL": "https://www.linkedin.com/in/j%C3%B6rgen-sandahl-b177064/"
                    }]
                  }
                },
                {
                  "name": "Carolina",
                  "surnames": "Brandtman",
                  "title": "CEO",
                  "contact": {
                    "publicProfiles": [{
                      "type": "linkedin",
                      "URL": "https://www.linkedin.com/in/carolinabrandtman/"
                    }]
                  }
                }
              ]
            },
            {
              "name": "Product Owner/Commercial Manager",
              "startDate": "2015-05-01",
              "finishDate": "2018-05-01",
              "challenges": [{
                  "description": "Key account management of consumer loan brokers in the Swedish market",
                  "actions": [
                    "Acquiring and developing sales channels and partnerships"
                  ]
                },
                {
                  "description": "Business Development of Consumer Loans",
                  "actions": [
                    "Lead agile team in business development process",
                    "Develop and maintain automatic consumer loans pricing optimization framework"
                  ]
                }
              ]
            }
          ]
        },
        {
          "organization": {
            "name": "GE Money Bank AB",
            "description": "Nordic Consumer Finance Bank. Subsidiary of GE Capital",
            "URL": "https://www.gecapital.com/",
            "image": {
              "alt": "GE Logo",
              "link": "https://www.gecapital.com/themes/custom/ge_capital/images/ge-monogram-blue.svg"
            },
            "location": {
              "country": "SE",
              "region": "Stockholm",
              "municipality": "Stockholm"
            }
          },
          "type": "bigCorp",
          "roles": [
            {
            "name": "Business Analyst Trainee",
            "startDate": "2013-06-01",
            "finishDate": "2015-05-01",
            "challenges": [""]
            },
            {
            "name": "Risk Analyst",
            "startDate": "2010-06-01",
            "finishDate": "2013-06-01",
            "challenges": [""]
            },
          ]
        },
      ],
      "publicArtifacts": [
      ]
    },
    "knowledge": {
      "languages": [{
          "name": "SV",
          "level": "Native or bilingual proficiency"
        },
        {
          "name": "EN",
          "level": "Full professional proficiency"
        },
        {
          "name": "DE",
          "level": "Limited working proficiency"
        }
      ],
      "studies": [{
          "studyType": "officialDegree",
          "degreeAchieved": true,
          "name": "MSc, Business & Economics concentration in Finance",
          "startDate": "2011-09-01",
          "finishDate": "2013-06-01",
          "institution": {
            "name": "Stockholm School of Economics",
            "description": "An international business school in Sweden, offering a first-class, competitive education in business and economics",
            "URL": "https://www.hhs.se/",
            "image": {
              "alt": "SSE logo",
              "link": "https://media-exp1.licdn.com/dms/image/C4E0BAQETFcd6jui9wQ/company-logo_200_200/0/1519889626078?e=1656547200&v=beta&t=DhHclL_-aXYlgePH9LgR7BIFGWueOXdkPnH75HiEpIE"
            },
            "location": {
              "country": "SE",
              "region": "Stockholm"
            }
          }
        },
        {
          "studyType": "officialDegree",
          "degreeAchieved": true,
          "name": "BSc, Business & Economics concentration in Finance",
          "startDate": "2008-09-01",
          "finishDate": "2011-06-01",
          "institution": {
            "name": "Stockholm School of Economics",
            "description": "An international business school in Sweden, offering a first-class, competitive education in business and economics",
            "URL": "https://www.hhs.se/",
            "image": {
              "alt": "SSE logo",
              "link": "https://media-exp1.licdn.com/dms/image/C4E0BAQETFcd6jui9wQ/company-logo_200_200/0/1519889626078?e=1656547200&v=beta&t=DhHclL_-aXYlgePH9LgR7BIFGWueOXdkPnH75HiEpIE"
            },
            "location": {
              "country": "SE",
              "region": "Stockholm"
            }
          }
        }
      ]
    },
    "careerPreferences": {
      "contact": {
        "publicProfiles": [{
          "type": "linkedin",
          "URL": "https://www.linkedin.com/in/frej-andreassen/"
        }]
      },
      "status": "openToOffers",
      "requirements": {
        "compensation": {
          "salary": {
            "currency": "EUR",
            "from": 60000
          }
        },
        "contractTypes": [
          "permanent",
          "freelance"
        ],
        "location": {
          "remoteOnly": false,
          "openToRelocate": false,
          "openToRemote": true,
          "workingAreas": [
            {
              "location": {
                "country": "SE",
                "region": "Halland",
                "municipality": "Falkenberg"
              },
              "distanceFromMunicipality": {
                "unit": "Km",
                "amount": 20
              }
            }
          ]
        }
      },
      "preferences": {
        "preferredOrganizations": [
          "startup",
          "freelance",
          "NGO",
          "other"
        ],
        "preferredRoles": [
          "C3PO"
        ]
      },
      "goals": [
        {
          "description": "Entrepreneurial spirit and mindset, I am a self-starter, driven, and love learning and building"
        }
      ]
    }
  } 
}