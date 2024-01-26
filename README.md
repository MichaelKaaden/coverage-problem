# Coverage Problem

This repository's sole purpose is to demonstrate a problem with
the [Jenkins Coverage plug-in](https://github.com/jenkinsci/coverage-plugin).

It contains two Angular applications, "alpha" and "beta". The files
in application "alpha" have the same names as in application "beta",
but their code coverage is different. This leads to an error merging
the coverage results:

```
Also:   org.jenkinsci.plugins.workflow.actions.ErrorAction$ErrorId: a0eec1e7-0b39-4328-a3be-3cb129459abb
java.lang.IllegalArgumentException: Cannot merge coverage information for line 14 in [FILE] app.component.ts <0>
at edu.hm.hafner.coverage.FileNode.mergeCounters(FileNode.java:156)
at edu.hm.hafner.coverage.FileNode.mergeNode(FileNode.java:136)
at edu.hm.hafner.coverage.Node.lambda$mergeNode$17(Node.java:745)
at java.base/java.util.ArrayList.forEach(ArrayList.java:1511)
at edu.hm.hafner.coverage.Node.mergeNode(Node.java:741)
at edu.hm.hafner.coverage.Node.lambda$mergeNode$17(Node.java:745)
at java.base/java.util.ArrayList.forEach(ArrayList.java:1511)
at edu.hm.hafner.coverage.Node.mergeNode(Node.java:741)
at edu.hm.hafner.coverage.Node.merge(Node.java:720)
at java.base/java.util.stream.ReduceOps$2ReducingSink.accept(ReduceOps.java:123)
at java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)
at java.base/java.util.ArrayList$ArrayListSpliterator.forEachRemaining(ArrayList.java:1625)
at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:509)
at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)
at java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:921)
at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)
at java.base/java.util.stream.ReferencePipeline.reduce(ReferencePipeline.java:662)
at edu.hm.hafner.coverage.Node.merge(Node.java:687)
at io.jenkins.plugins.coverage.metrics.steps.CoverageRecorder.aggregateResults(CoverageRecorder.java:523)
at io.jenkins.plugins.coverage.metrics.steps.CoverageRecorder.perform(CoverageRecorder.java:413)
at io.jenkins.plugins.coverage.metrics.steps.CoverageRecorder.perform(CoverageRecorder.java:402)
at io.jenkins.plugins.coverage.metrics.steps.CoverageStep$Execution.run(CoverageStep.java:365)
at io.jenkins.plugins.coverage.metrics.steps.CoverageStep$Execution.run(CoverageStep.java:333)
at org.jenkinsci.plugins.workflow.steps.SynchronousNonBlockingStepExecution.lambda$start$0(SynchronousNonBlockingStepExecution.java:47)
at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)
at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)
at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)
at java.base/java.lang.Thread.run(Thread.java:840)
```

I use Cobertura to provide the coverage data, as it's is the only format
supported by both Jest and the Jenkins Coverage plug-in.

The (now deprecated) Code Coverage plug-in is able to process the
same coverage files. For an example, see the Jenkinsfile in the branch
`feature/code-coverage-plugin`.

For some background: Angular applications are typically written
in TypeScript. The unit tests are executed using Jest, which also
produces the code coverage data. Available reporters are listed
[here](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib).
