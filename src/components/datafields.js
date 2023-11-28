const inputElemGen = {
  name: {
    value: "",
    desc: "Name",
  },
  headline: {
    value: "",
    desc: "Job title",
  },
  email: {
    value: "",
    desc: "E-mail address",
    type: "email",
  },
  phone: {
    value: "",
    desc: "Phone number",
  },
};

const exp = {
  position: {
    value: "",
    desc: "Position",
  },
  company: {
    value: "",
    desc: "Company",
  },
  start: {
    value: "",
    desc: "Employment start",
  },
  end: {
    value: "",
    desc: "Employment end",
  },
  responsibilities: {
    value: "",
    desc: "Responsibilities",
  },
};

const project = {
  title: {
    value: "",
    desc: "Project title",
  },
  repolink: {
    value: "",
    desc: "Website / GitHub link",
  },
  summary: {
    value: "",
    desc: "Project description",
  },
};

export { inputElemGen, exp, project };
