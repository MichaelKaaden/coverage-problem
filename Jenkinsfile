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
      // recordCoverage ignoreParsingErrors: true,
      // sourceCodeRetention: 'NEVER',
      // tools: [
      //     [parser: 'COBERTURA', pattern: 'coverage/**/cobertura-coverage.xml']
      // ]

      // use the Code Coverage plug-in together with the Cobertura plug-in instead
      publishCoverage adapters: [
        coberturaAdapter(
          mergeToOneReport: true,
          path: 'coverage/**/cobertura-coverage.xml'
        )
      ]
      sourceFileResolver:
      sourceFiles('NEVER_STORE')
    }
  }
}
