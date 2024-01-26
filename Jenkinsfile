node {
  stage("Checkout") {
    checkout changelog: false,
      scm: scmGit(
        branches: [[name: '*/main']],
        extensions: [],
        userRemoteConfigs: [[url: 'https://github.com/MichaelKaaden/coverage-problem.git']]
      )
  }

  nodejs('NodeJS 20') {
    stage("Prepare") {
      sh 'npm install'
    }

    stage("Test") {
      sh 'npm run test:all'
    }

    stage("Publish Code Coverage") {
      recordCoverage ignoreParsingErrors: true,
        sourceCodeRetention: 'NEVER',
        tools: [
          [parser: 'COBERTURA', pattern: 'coverage/**/cobertura-coverage.xml']
        ]
    }
  }
}
