# app.py

from flask import Flask, request, jsonify
# from flask_cors import CORS, cross_origin
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
import pickle

app = Flask(__name__)
CORS(app)

log_reg_model = pickle.load(open('logreg.pkl', 'rb'))
pos_lin_reg_model = pickle.load(open('poslinreg.pkl', 'rb'))
neg_lin_reg_model = pickle.load(open('neglinreg.pkl', 'rb'))

log_vect = pickle.load(open('log_vect.pkl', 'rb'))
pos_vect = pickle.load(open('pos_vect.pkl', 'rb'))
neg_vect = pickle.load(open('neg_vect.pkl', 'rb'))

log_len = len(log_reg_model.coef_[0])
print(len(log_reg_model.coef_[0]))

# df = pd.read_csv('https://s3.us-east-2.amazonaws.com/redditscore/2500rows.csv', error_bad_lines=False, engine='python', encoding='utf-8')
# df = df.dropna()
# df.score = df.score.astype('int')

# df['pn_score'] = ""

# for i in df['score'].index:
#     if df['score'].at[i] > 1:
#         df['pn_score'].at[i] = 'positive'
#     elif float(df['score'].at[i]) <= 0:
#         df['pn_score'].at[i] = 'negative'
#     else:
#         df['pn_score'].at[i] = 'one'

# pdf = df[df.pn_score == 'positive']
# ndf = df[df.pn_score == 'negative']

# log_vect = TfidfVectorizer(max_df = 0.95, min_df = 5, binary = True, stop_words = 'english')
# log_vect.fit_transform(df.body)

# pos_vect = TfidfVectorizer(max_df = 0.95, min_df = 5, binary = True, stop_words = 'english')
# pos_vect.fit_transform(pdf.body)

# neg_vect = TfidfVectorizer(max_df = 0.95, min_df = 5, binary = True, stop_words = 'english')
# neg_vect.fit_transform(ndf.body)

print('API Initialized!')

@app.route('/predict', methods=['POST'])
# @cross_origin(origin='*')
def predict_score():
    comment = request.get_json()['comment']

    pn = log_reg_model.predict(log_vect.transform([comment]))

    score = ''

    if (pn == 0):
        score = neg_lin_reg_model.predict(neg_vect.transform([comment]))
    elif (pn == 2):
        score = pos_lin_reg_model.predict(pos_vect.transform([comment]))
    else:
        score = 1
    
    print('\nlog prediction:')
    print(pn)
    print('\nscore:')
    print(score)
    print('\n')

    return str(int(round(score[0])))

if __name__ == '__main__':
    app.run(host= '0.0.0.0',debug=True)