# FDE skills

The roles share customer delivery responsibilities, while their technical requirements vary. Start with the work area you want to pursue, then read the linked employer requirements.

## Skills across the work

| Skill | What the work looks like | Employer examples |
| --- | --- | --- |
| Customer discovery | Ask users about their workflow, constraints, and definition of success | [Coinbase](./roles/coinbase-hr-intern), [OpenAI](./roles/openai-software) |
| Software delivery | Design, code, test, debug, and ship a usable application | [Palantir graduate](./roles/palantir-commercial-graduate), [Teleskope](./roles/teleskope-security) |
| Data integration | Connect APIs, existing data, and the application’s data model | [Google](./roles/google-cloud-intern), [Coinbase](./roles/coinbase-hr-intern) |
| AI quality | Evaluate outputs, monitor behavior, and design human review | [Google](./roles/google-cloud-intern), [PagerDuty](./roles/pagerduty-sre) |
| Production operations | Automate deployments, monitor services, and investigate incidents | [Palantir infrastructure](./roles/palantir-infrastructure-graduate), [PagerDuty](./roles/pagerduty-sre) |
| Communication | Explain tradeoffs, document decisions, and give customers useful handoffs | [Modal](./roles/modal-ml), [Teleskope](./roles/teleskope-security) |

## Technical depth by specialty

- **Application delivery.** Full-stack development, relational databases, testing, APIs, project scope, and delivery. OpenAI emphasizes seven years of professional engineering, while Coinbase accepts evidence from student projects.
- **AI applications.** LLM workflows, evaluation, retrieval, vector databases, agent state, tracing, and cloud integration. Google’s internship already asks for production AI experience.
- **ML infrastructure.** Model serving or training tools, performance experiments, GPU workloads, and the ability to explain architecture. Modal asks for depth in at least one relevant toolchain.
- **Security and operations.** Cloud deployment, incident diagnosis, runbooks, permissions, and safe automation. Teleskope focuses on data-security customer delivery. PagerDuty focuses on agent-driven incident response.
- **Leadership.** Architecture, team development, delivery metrics, cloud platforms, and cross-team execution. Citi’s director role requires extensive leadership experience.

These comparisons synthesize the linked profiles. An employer’s preferred tools and qualifications appear in each profile.

## Demonstrating readiness

The following are suggested portfolio exercises derived from the work. They are researcher suggestions.

| Target | Evidence you could build |
| --- | --- |
| Student application delivery | Interview a willing user about a small workflow, build an application with an API, test it, and record what changed after feedback |
| AI application delivery | Build retrieval over public documents, evaluate known questions and failure cases, and explain when a person should review the result |
| Systems or operations | Deploy a small service, add monitoring, simulate a failure, and document recovery and permissions |
| ML performance | Compare two serving configurations with the same workload and report response time, throughput, cost assumptions, and quality |

## Terms used in the profiles {#terms}

| Term | Meaning in this research |
| --- | --- |
| LLM | Large language model, used to generate or interpret language and other content |
| RAG | Retrieval-augmented generation, where an application retrieves relevant material to give a model context |
| Vector database | Stores representations used to retrieve items by similarity |
| Agent | An application that uses a model to choose steps and call tools toward a goal |
| MCP | Model Context Protocol, a standard way to connect AI applications with tools and data |
| ADK | Google Agent Development Kit, used to build agent applications |
| Evaluation | Testing outputs or actions against defined examples, requirements, or measures |
| Guardrail | A check or restriction on what a system may produce or do |
| Observability | Logs, metrics, and traces used to understand a running system |
| SRE | Site reliability engineering, applying software engineering to service operation and reliability |
| CI/CD | Automated integration, testing, and delivery or deployment of software changes |
| GitOps | Managing deployed infrastructure or application state through version-controlled configuration |
| Infrastructure as code | Defining infrastructure in files that tools can apply and review |
| Kubernetes | A system for deploying and managing applications packaged in containers |
| Inference | Running a trained model to produce an output |
| Throughput and latency | How much work completes per unit of time and how long one request takes |
| DORA metrics | Software delivery measures such as deployment frequency, change lead time, failures, and recovery time |

[Return to role comparison](./)

