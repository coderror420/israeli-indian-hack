import React, { useState } from 'react';
import { Upload, FileImage, CheckCircle, AlertCircle } from 'lucide-react';

const Journal = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);
  const [wordCount, setWordCount] = useState(0);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    setDescription(text);
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  const handleEvaluate = async () => {
    if (!file || !description || wordCount < 50 || wordCount > 250) {
      return;
    }

    setIsEvaluating(true);
    setEvaluationResult(null);

    // Simulate evaluation process
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock evaluation result
    const isAppropriate = Math.random() > 0.3; // 70% chance of being appropriate
    setEvaluationResult({
      appropriate: isAppropriate,
      message: isAppropriate 
        ? "Journal entry meets professional standards and is suitable for healthcare documentation."
        : "Journal entry may need revision. Please ensure content follows professional healthcare documentation guidelines."
    });

    setIsEvaluating(false);
  };

  const isFormValid = file && description && wordCount >= 50 && wordCount <= 250;
  const wordCountColor = wordCount < 50 ? 'text-red-500' : wordCount > 250 ? 'text-red-500' : 'text-blue-600';

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      {/* Image Upload Section */}
      <div>
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="flex flex-col items-center justify-center pt-4 pb-4">
            {file ? (
              <>
                <FileImage className="w-8 h-8 mb-2 text-blue-500" />
                <p className="mb-1 text-sm text-gray-700">
                  <span className="font-semibold">{file.name}</span>
                </p>
                <p className="text-xs text-gray-500">Click to change image</p>
              </>
            ) : (
              <>
                <Upload className="w-8 h-8 mb-2 text-gray-400" />
                <p className="mb-1 text-sm text-gray-500">
                  <span className="font-semibold">Click to select image</span>
                </p>
                <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
              </>
            )}
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept=".jpg,.jpeg,.png,.gif,.webp" 
            onChange={handleFileSelect} 
          />
        </label>
      </div>

      {/* Description Text Area */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gray-700">
            Journal Description
          </label>
          <span className={`text-xs ${wordCountColor}`}>
            {wordCount}/50-250 words
          </span>
        </div>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Describe your professional experience, patient interactions, learning outcomes, or care observations. Minimum 50 words, maximum 250 words."
          className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
          maxLength={2000}
        />
        {wordCount > 0 && wordCount < 50 && (
          <p className="text-xs text-red-500">
            Please write at least {50 - wordCount} more words
          </p>
        )}
        {wordCount > 250 && (
          <p className="text-xs text-red-500">
            Please remove {wordCount - 250} words
          </p>
        )}
      </div>

      {/* Evaluate Button */}
      <button
        onClick={handleEvaluate}
        disabled={!isFormValid || isEvaluating}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
          isFormValid && !isEvaluating
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isEvaluating ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Evaluating...</span>
          </div>
        ) : (
          'Evaluate Journal Entry'
        )}
      </button>

      {/* Evaluation Result */}
      {evaluationResult && (
        <div className={`p-4 rounded-lg border-l-4 ${
          evaluationResult.appropriate 
            ? 'bg-blue-50 border-blue-400' 
            : 'bg-red-50 border-red-400'
        }`}>
          <div className="flex items-start space-x-3">
            {evaluationResult.appropriate ? (
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            )}
            <div>
              <h4 className={`font-medium ${
                evaluationResult.appropriate ? 'text-blue-800' : 'text-red-800'
              }`}>
                {evaluationResult.appropriate ? 'Entry Approved' : 'Review Required'}
              </h4>
              <p className={`text-sm mt-1 ${
                evaluationResult.appropriate ? 'text-blue-700' : 'text-red-700'
              }`}>
                {evaluationResult.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journal;