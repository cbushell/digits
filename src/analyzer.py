from sklearn.ensemble import RandomForestClassifier
from numpy import genfromtxt, savetxt

def main():
    print "Loading training and test data...."
    
    #create the training & test sets, skipping the header row with [1:]
    dataset = genfromtxt(open('data/train.csv','r'), delimiter=',', dtype='f8')[1:]
    target = [x[0] for x in dataset]
    train = [x[1:] for x in dataset]
    test = genfromtxt(open('data/test.csv','r'), delimiter=',', dtype='f8')[1:]

    print "Creating random forest...."

    #create and train the random forest
    #multi-core CPUs can use: rf = RandomForestClassifier(n_estimators=100, n_jobs=2)
    rf = RandomForestClassifier(n_estimators=100)
    rf.fit(train, target)
    predicted_probs = [x[1] for x in rf.predict_proba(test)]

    print "Saving results...."

    savetxt('data/submission.csv', predicted_probs, delimiter=',', fmt='%f')


if __name__=="__main__":
    main()
